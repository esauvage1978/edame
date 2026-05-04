/**
 * Configuration EDAME - Educ à la Maison et à l'Ecole
 * Livret d'accueil + https://edame.fr
 */
export const siteConfig = {
  name: 'EDAME',
  tagline: "l'Educ A la Maison et à l'Ecole",
  title: 'Accompagnement éducatif, prévention et aide à la scolarité',
  founderName: 'Leduc Delphine',
  /** Création du projet EDAME */
  projectSince: 2024,
  siteUrl: 'https://edame.fr',
  linkedinUrl: 'https://www.linkedin.com/company/edame/',

  contact: {
    phone: '06 79 92 74 53',
    email: 'contact@edame.fr',
    /** Secteur d'intervention */
    zone: 'Lille, Dunkerque, Armentières et environs',
    addressLine: '266 rue nationale',
    codePostal: '59000',
    ville: 'Lille',
  },

  /**
   * Formulaire contact → Webhooky (Mailjet / automatisation).
   * Le navigateur envoie vers submitPath (PHP même origine) : le script relaye en JSON vers Webhooky et évite CORS.
   * L’URL Webhooky est définie dans public/contact-webhook.php.
   */
  /** Google Analytics 4 (gtag) — chargé uniquement si le visiteur accepte les cookies (voir CookieBanner) */
  googleAnalyticsId: 'G-KE1PD9VG3Y',

  formWebhook: {
    submitPath: '/contact-webhook.php',
    source: 'edame-fr',
  },

  legal: {
    status: 'Micro-entreprise',
    siret: '928 785 542',
    adresse: '266 rue nationale',
    codePostal: '59000',
    ville: 'Lille',
    rcs: '',
    capitalSocial: '',
    tvaIntracommunautaire: '',
    hebergeur: {
      nom: "Nom de l'hébergeur",
      adresse: "Adresse de l'hébergeur",
    },
  },
};
