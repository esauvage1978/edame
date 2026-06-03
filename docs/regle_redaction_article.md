# Règles de rédaction des articles blog — EDAME

Ce document définit les règles de rédaction SEO, éditoriales et UX pour les contenus publiés sur le site `edame.fr`.

Objectifs :
- développer le trafic SEO qualifié,
- rassurer les parents,
- démontrer l’expertise de l’éducatrice spécialisée,
- générer des prises de contact,
- créer un fort maillage interne,
- devenir une référence sur les problématiques éducatives et émotionnelles de l’enfant et de l’adolescent.

---

# 1. Règles communes à tous les articles

## 1.1 Objectif éditorial

Chaque article doit répondre à une intention réelle des parents, familles ou professionnels.

Intentions principales :

- Comprendre un comportement ou une difficulté.
- Trouver des solutions concrètes.
- Être rassuré.
- Savoir quand consulter.
- Mieux accompagner son enfant.
- Identifier des signes d’alerte.
- Découvrir des outils éducatifs ou émotionnels.
- Améliorer la communication familiale.

L’article doit toujours :
- être humain,
- concret,
- rassurant,
- utile immédiatement.

Éviter :
- le jargon médical inutile,
- les textes génériques,
- les contenus froids ou trop techniques,
- les formulations culpabilisantes.

Le ton doit être :
- empathique,
- professionnel,
- accessible,
- rassurant,
- crédible.

---

## 1.2 Frontmatter obligatoire ou recommandé

Chaque article Markdown doit respecter le schéma Astro du projet.

### Champs essentiels

- `title`
- `headline`
- `description`
- `pubDate`
- `updatedDate`
- `heroImage`
- `categories`
- `relatedLinks`
- `tags`
- `faqSchema`
- `articleJsonLd: true`

### Champs recommandés

- `localBusinessSchema`
- `personSchema`
- `breadcrumbSchema`

---

## 1.3 SEO de base

Chaque article doit contenir :

- un H1 unique,
- une introduction émotionnelle forte,
- des H2 clairs orientés recherche Google,
- des exemples concrets,
- des cas fréquents,
- des conseils applicables,
- des liens internes utiles,
- une FAQ visible,
- des formulations naturelles.

Les mots-clés doivent être intégrés naturellement.

### Exemples de mots-clés

- éducatrice spécialisée
- guidance parentale
- enfant hypersensible
- gestion des émotions
- trouble du comportement
- enfant agressif
- crise de colère
- TDAH enfant
- TSA enfant
- adolescent difficile
- parentalité positive
- communication parent enfant

### À éviter

- le bourrage SEO,
- les paragraphes trop longs,
- les formulations anxiogènes,
- les diagnostics médicaux affirmatifs,
- les promesses irréalistes.

---

## 1.4 SEO émotionnel obligatoire

Chaque article doit contenir :

### Une identification émotionnelle rapide

Le parent doit se reconnaître immédiatement.

Exemples :
- “Votre enfant explose pour un détail ?”
- “Vous avez l’impression de ne plus savoir comment réagir ?”
- “Les devoirs deviennent des conflits quotidiens ?”

### Une réassurance

Le contenu doit :
- normaliser certaines difficultés,
- éviter la culpabilisation,
- proposer des pistes concrètes.

### Des exemples du quotidien

Exemples :
- école,
- repas,
- coucher,
- écrans,
- fratrie,
- crise en public,
- devoirs,
- opposition,
- hypersensibilité.

---

## 1.5 FAQ et JSON-LD

Si l’article contient une FAQ :

- les questions doivent être visibles,
- `faqSchema` doit reprendre exactement les mêmes questions,
- minimum :
  - 3 questions pour un article simple,
  - 5 questions pour un article pilier.

### Questions types

- Est-ce normal ?
- Quand consulter ?
- Comment réagir ?
- Comment aider mon enfant ?
- À partir de quand faut-il s’inquiéter ?

---

## 1.6 Maillage interne

Le maillage doit guider naturellement le parent.

### Types de liens internes

- articles liés à une émotion,
- troubles associés,
- conseils éducatifs,
- gestion des crises,
- communication familiale,
- accompagnement adolescent,
- TSA,
- TDAH,
- hypersensibilité,
- confiance en soi,
- anxiété enfant.

### Exemples de pages futures

- `/enfant-hypersensible/`
- `/crises-de-colere-enfant/`
- `/comment-poser-des-limites/`
- `/tdah-enfant-signaux/`
- `/ado-opposition-familiale/`
- `/gestion-emotions-enfant/`
- `/epuisement-parental/`
- `/quand-consulter-educatrice-specialisee/`

### Préférer des ancres naturelles

- “Comprendre les crises de colère”
- “Voir les signes du TDAH”
- “Découvrir des outils pour gérer les émotions”

---

# 2. Article simple

## 2.1 Quand utiliser ce format

Utiliser un article simple pour :

- répondre à une question précise,
- traiter une difficulté ciblée,
- rassurer un parent,
- expliquer un comportement,
- donner des conseils pratiques,
- traiter une recherche longue traîne.

### Exemples

- “Pourquoi mon enfant crie tout le temps ?”
- “Comment calmer une crise de colère ?”
- “Mon adolescent refuse toute discussion”
- “Comment aider un enfant hypersensible à l’école ?”

---

## 2.2 Structure recommandée

### Structure type

1. Introduction émotionnelle.
2. Réponse rapide.
3. Causes fréquentes.
4. Ce qu’il faut éviter.
5. Conseils concrets.
6. Quand consulter.
7. Liens internes utiles.
8. FAQ.

---

## 2.3 H1 et titres

Le H1 doit être :
- direct,
- humain,
- proche des recherches Google.

### Exemples

- `Mon enfant fait des crises de colère : que faire ?`
- `Enfant hypersensible : comment l’aider au quotidien ?`
- `Quand consulter une éducatrice spécialisée ?`
- `Adolescent opposant : comprendre et réagir`

### Exemples de H2

- `Pourquoi mon enfant explose-t-il ?`
- `Les erreurs à éviter`
- `Comment réagir pendant une crise`
- `Quand faut-il consulter ?`

---

## 2.4 Longueur cible

### Repères

- article ciblé :
  1 000 à 1 800 mots.

- sujet concurrentiel :
  1 800 à 2 500 mots.

La longueur doit toujours servir :
- la compréhension,
- la réassurance,
- la valeur pratique.

---

## 2.5 Éléments obligatoires

Chaque article doit contenir :

- situations concrètes,
- conseils applicables,
- signes fréquents,
- erreurs à éviter,
- section “quand consulter ?”,
- FAQ visible,
- maillage interne.

---

## 2.6 Conversion douce

Le but n’est pas de vendre agressivement.

### Exemples de CTA

- “Besoin d’un accompagnement personnalisé ?”
- “Parler de votre situation”
- “Être accompagné dans votre quotidien familial”

Les CTA doivent apparaître :
- après une section émotionnelle forte,
- après les conseils pratiques,
- en fin d’article.

---

## 2.7 Checklist article simple

Avant publication :

- [ ] H1 unique.
- [ ] Introduction émotionnelle forte.
- [ ] Parent ciblé clairement identifié.
- [ ] Conseils concrets.
- [ ] Exemples réels du quotidien.
- [ ] Section “Quand consulter”.
- [ ] FAQ visible.
- [ ] `faqSchema` aligné.
- [ ] 3 à 5 liens internes utiles.
- [ ] CTA humain et rassurant.
- [ ] Aucun ton culpabilisant.

---

# 3. Article pilier

Un article pilier doit devenir une référence Google sur une problématique forte.

---

## 3.1 Quand utiliser ce format

Utiliser un article pilier pour :

- hypersensibilité enfant,
- TDAH,
- TSA,
- troubles du comportement,
- gestion des émotions,
- parentalité difficile,
- adolescent en difficulté,
- guidance parentale,
- rôle de l’éducatrice spécialisée.

---

## 3.2 Objectifs d’un article pilier

L’article pilier doit :

- ranker sur des mots-clés concurrentiels,
- capter du trafic longue traîne,
- rassurer les familles,
- démontrer l’expertise,
- créer du maillage interne,
- générer des prises de contact.

---

## 3.3 H1 obligatoire

Le H1 doit contenir :
- la problématique,
- l’intention utilisateur,
- éventuellement l’année.

### Exemples

- `Enfant hypersensible : comprendre et aider au quotidien (2026)`
- `TDAH enfant : signes, solutions et accompagnement`
- `Crises de colère chez l’enfant : guide complet pour les parents`

---

## 3.4 Introduction SEO

L’introduction doit :

- faire ressentir le problème,
- rassurer,
- expliquer ce que le lecteur va trouver,
- intégrer naturellement les mots-clés principaux.

### Longueur

150 à 250 mots.

---

## 3.5 Structure obligatoire

### Structure minimale

1. Introduction SEO émotionnelle.
2. Sommaire avec ancres.
3. Réponse rapide.
4. Comprendre la difficulté.
5. Causes possibles.
6. Signes fréquents.
7. Solutions concrètes.
8. Erreurs à éviter.
9. Quand consulter.
10. FAQ SEO.
11. Articles liés.
12. CTA rassurant.

---

## 3.6 Section “Comprendre”

Cette section doit :
- vulgariser,
- rassurer,
- contextualiser.

### Éviter

- les diagnostics sauvages,
- le ton médical,
- les affirmations absolues.

---

## 3.7 Section “Solutions concrètes”

Donner :
- phrases à utiliser,
- réactions utiles,
- routines,
- outils émotionnels,
- exemples réalistes.

Les conseils doivent être :
- applicables immédiatement,
- simples,
- crédibles.

---

## 3.8 Section “Quand consulter”

OBLIGATOIRE.

Inclure :
- signaux d’alerte,
- fréquence,
- souffrance familiale,
- impact scolaire,
- isolement,
- violence,
- anxiété importante.

---

## 3.9 FAQ SEO

Minimum :
5 questions.

### Exemples

- Est-ce normal à cet âge ?
- Comment calmer une crise ?
- Mon enfant est-il hypersensible ?
- Quand consulter une éducatrice spécialisée ?
- Comment gérer l’opposition quotidienne ?

---

## 3.10 Maillage interne pilier

Le pilier doit redistribuer vers :
- articles émotionnels,
- guides pratiques,
- FAQ,
- situations précises,
- troubles associés.

### Objectif

Créer un cocon sémantique fort autour :
- des émotions,
- du comportement,
- de la parentalité,
- de l’accompagnement éducatif.

---

## 3.11 Longueur cible

### Repères

- pilier standard :
  2 500 à 4 000 mots.

- pilier concurrentiel :
  4 000 à 6 000 mots.

---

## 3.12 Conversion et prise de contact

Le pilier doit inspirer confiance.

### Éléments recommandés

- témoignages,
- expérience terrain,
- exemples concrets,
- approche humaine,
- explication du rôle de l’éducatrice spécialisée.

Les CTA doivent être :
- rassurants,
- non agressifs,
- visibles sans être envahissants.

---

## 3.13 Checklist article pilier

Avant publication :

- [ ] H1 optimisé.
- [ ] Intro émotionnelle forte.
- [ ] Sommaire avec ancres.
- [ ] Réponse rapide.
- [ ] Vulgarisation claire.
- [ ] Conseils applicables.
- [ ] Section “Quand consulter”.
- [ ] FAQ visible 5+ questions.
- [ ] `faqSchema` aligné.
- [ ] 6+ liens internes.
- [ ] CTA humains.
- [ ] Ton empathique.
- [ ] Aucun ton culpabilisant.
- [ ] Build Astro validé.

---

# 4. Validation technique avant livraison

Après création ou modification :

1. Vérifier les lints.
2. Vérifier le nombre de mots.
3. Lancer :

```bash
npm run build


| Type d'article          | Objectif                          |   Longueur cible | FAQ            | Conversion        | Maillage              |
| ----------------------- | --------------------------------- | ---------------: | -------------- | ----------------- | --------------------- |
| Article simple          | Répondre à une difficulté précise | 1 000-2 000 mots | 3-5 questions  | CTA doux          | 3-5 liens             |
| Article émotionnel fort | Rassurer + ranker long tail       | 1 800-2 500 mots | 5+ questions   | Consultation      | 5-7 liens             |
| Article pilier          | Référence SEO + trafic massif     | 2 500-6 000 mots | 5-10 questions | Forte réassurance | 6+ liens structurants |
