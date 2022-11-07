---
title: safeFetch.ts
nav_order: 1
parent: Modules
---

## safeFetch overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [safeFetch](#safefetch)

---

# utils

## safeFetch

Wraps `fetch` in a `TaskEither.tryCatch`.

**Signature**

```ts
export default function safeFetch(input: RequestInfo | URL, init?: RequestInit | undefined)
```

**Example**

```ts
import { safeFetch } from '@jvlk/fp-ts-fetch'

safeFetch('testing.com')
```

Added in v1.0.0
