<?php
declare(strict_types=1);

/**
 * Relais formulaire contact → Webhooky (JSON).
 * Évite le blocage CORS du navigateur (origine https://… → webhooky.builders).
 */
$webhookUrl = 'https://webhooky.builders/webhook/form/2bdd0911-43ee-497e-82f7-cc10b332a07b';

function contact_journal_dir(): ?string
{
    $candidates = [dirname(__DIR__) . '/contact-journal', __DIR__ . '/_contact-journal'];
    foreach ($candidates as $dir) {
        if (!is_dir($dir)) {
            @mkdir($dir, 0700, true);
        }
        if (is_dir($dir) && is_writable($dir)) {
            if (str_starts_with($dir, __DIR__)) {
                if (!is_file($dir . '/.htaccess')) {
                    @file_put_contents($dir . '/.htaccess', "Require all denied\nDeny from all\n");
                }
                if (!is_file($dir . '/index.html')) {
                    @file_put_contents($dir . '/index.html', '');
                }
            }
            return $dir;
        }
    }

    return null;
}

function contact_journal_write(array $entry): void
{
    try {
        $dir = contact_journal_dir();
        if ($dir === null) {
            error_log('[contact-journal] dossier non inscriptible');

            return;
        }
        $file = $dir . '/demandes-' . gmdate('Y-m') . '.jsonl';
        $ok = @file_put_contents(
            $file,
            json_encode($entry, JSON_UNESCAPED_UNICODE) . "\n",
            FILE_APPEND | LOCK_EX
        );
        if ($ok === false) {
            error_log('[contact-journal] écriture impossible: ' . $file);
        }
        $limit = gmdate('Y-m', strtotime('first day of -2 months'));
        foreach ((array) glob($dir . '/demandes-*.jsonl') as $old) {
            if (preg_match('/demandes-(\d{4}-\d{2})\.jsonl$/', (string) $old, $m) && $m[1] < $limit) {
                @unlink((string) $old);
            }
        }
    } catch (Throwable $e) {
        error_log('[contact-journal] ' . $e->getMessage());
    }
}

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
  exit;
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > 65536) {
  http_response_code(413);
  echo json_encode(['ok' => false, 'error' => 'payload_too_large']);
  exit;
}

$data = json_decode($raw, true);
if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'invalid_json']);
  exit;
}

$allowedKeys = [
  'source',
  'objet',
  'name',
  'company',
  'email',
  'phone',
  'message',
  'submitted_at',
  'page',
];

$payload = [];
foreach ($allowedKeys as $k) {
  if (!array_key_exists($k, $data)) {
    continue;
  }
  $v = $data[$k];
  $payload[$k] = is_string($v) ? $v : (is_scalar($v) ? (string) $v : '');
}

$body = json_encode($payload, JSON_UNESCAPED_UNICODE);
if ($body === false) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'encode_failed']);
  exit;
}

if (!function_exists('curl_init')) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'curl_not_available']);
  exit;
}

$journalId = bin2hex(random_bytes(6));
$ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '?');
$host = (string) ($_SERVER['HTTP_HOST'] ?? '');
contact_journal_write([
  'id' => $journalId,
  'etape' => 'recue',
  'ip' => $ip,
  'host' => $host,
  'source' => $payload['source'] ?? '',
  'objet' => $payload['objet'] ?? '',
  'name' => $payload['name'] ?? '',
  'company' => $payload['company'] ?? '',
  'email' => $payload['email'] ?? '',
  'phone' => $payload['phone'] ?? '',
  'message' => $payload['message'] ?? '',
  'page' => $payload['page'] ?? '',
  'submitted_at' => $payload['submitted_at'] ?? '',
]);

$ch = curl_init($webhookUrl);
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => $body,
  CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 25,
]);

$resp = curl_exec($ch);
$code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$errno = curl_errno($ch);
$curlError = curl_error($ch);
curl_close($ch);

if ($errno !== 0 || $code < 200 || $code >= 300) {
  contact_journal_write([
    'id' => $journalId,
    'etape' => 'echec',
    'at' => gmdate('c'),
    'http' => $code,
    'curl' => $curlError,
    'reponse' => substr((string) $resp, 0, 300),
  ]);
  http_response_code(502);
  echo json_encode(['ok' => false, 'error' => 'upstream_error']);
  exit;
}

contact_journal_write([
  'id' => $journalId,
  'etape' => 'envoyee',
  'at' => gmdate('c'),
  'http' => $code,
]);

echo json_encode(['ok' => true]);