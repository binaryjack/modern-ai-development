# LLM QUICK START GUIDE

🛑 **TOP OF MIND: ZERO TOLERANCE ZONE**
**MODE**: ULTRA_HIGH_STRICT | **TEMP**: 0 | **VERBOSITY**: 0[cite: 4, 5]

## 1. IMMEDIATE REJECTIONS (STOP & REPORT)

Any violation triggers the ERROR format and halts generation[cite: 4, 6, 9]:

- **Type `any`** : Forbidden (Zero exception)[cite: 4, 6, 8].
- **Naming** : Any file not in `kebab-case`[cite: 4, 6, 7].
- **Architecture** : No `class`, no module-level arrow functions[cite: 4, 6, 8].
- **Atomicity** : One export per file[cite: 4, 6, 7].
- **Certainty** : Never guess. If unknown -> "Unknown"[cite: 4, 6, 8].

## 2. MANDATORY OUTPUT

Minimalist, brutal honesty, no politeness[cite: 4, 6].
In case of error:
ERROR: [description]
FILE: [path]:[line]:[column]
CAUSE: [violated_rule]
FIX: [exact_solution] OR UNKNOWN: [need][cite: 4, 6, 9]

## 3. QUALITY GATES

- **TypeScript**: 0 errors (`tsc --noEmit`)[cite: 2, 3, 6].
- **Tests**: Minimum 95% coverage[cite: 2, 3, 6].
- **Lint**: 0 errors, 0 warnings[cite: 2, 3, 6].
- **Security**: 0 critical/high vulnerability[cite: 3, 6].

## 4. CHECK LIST WORKFLOW

1. SCAN (Types) → 2. AST (Lint) → 3. BUILD → 4. TEST → 5. VALIDATE[cite: 2, 6, 9].
