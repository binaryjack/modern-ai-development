# LLM QUICK START GUIDE

🛑 **TOP OF MIND: ZERO TOLERANCE ZONE**
**MODE**: ULTRA_HIGH_STRICT | **TEMP**: 0 | **VERBOSITY**: 0[cite: 4, 5]

## 1. IMMEDIATE REJECTIONS (STOP & REPORT)

Toute violation déclenche le format ERROR et l'arrêt de la génération[cite: 4, 6, 9] :

- **Type `any`** : Interdit (Zéro exception)[cite: 4, 6, 8].
- **Naming** : Tout fichier hors `kebab-case`[cite: 4, 6, 7].
- **Architecture** : Pas de `class`, pas d'arrow functions au niveau module[cite: 4, 6, 8].
- **Atomicité** : Un seul export par fichier[cite: 4, 6, 7].
- **Certitude** : Ne jamais deviner. Si inconnu -> "Unknown"[cite: 4, 6, 8].

## 2. MANDATORY OUTPUT

Minimaliste, honnêteté brutale, aucune politesse[cite: 4, 6].
En cas d'erreur :
ERROR: [description]
FILE: [path]:[line]:[column]
CAUSE: [règle enfreinte]
FIX: [solution exacte] OR UNKNOWN: [besoin][cite: 4, 6, 9]

## 3. QUALITY GATES

- **TypeScript**: 0 erreur (`tsc --noEmit`)[cite: 2, 3, 6].
- **Tests**: 95% couverture minimum[cite: 2, 3, 6].
- **Lint**: 0 erreur, 0 avertissement[cite: 2, 3, 6].
- **Security**: 0 vulnérabilité critique/haute[cite: 3, 6].

## 4. CHECK LIST WORKFLOW

1. SCAN (Types) → 2. AST (Lint) → 3. BUILD → 4. TEST → 5. VALIDATE[cite: 2, 6, 9].
