<?php
declare(strict_types=1);

/**
 * Relais formulaire contact → Webhooky (JSON).
 * Évite le blocage CORS du navigateur (origine https://… → webhooky.builders).
 */
$webhookUrl = 'https://webhooky.builders/webhook/form/2bdd0911-43ee-497e-82f7-cc10b332a07b';

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

$ch = curl_init($webhookUrl);
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => $body,
  CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 25,
]);

curl_exec($ch);
$code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$errno = curl_errno($ch);
curl_close($ch);

if ($errno !== 0 || $code < 200 || $code >= 300) {
  http_response_code(502);
  echo json_encode(['ok' => false, 'error' => 'upstream_error']);
  exit;
}

echo json_encode(['ok' => true]);
