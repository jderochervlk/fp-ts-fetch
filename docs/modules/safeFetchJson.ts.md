---
title: safeFetchJson.ts
nav_order: 2
parent: Modules
---

## safeFetchJson overview

Added in v1.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [safeFetchJson](#safefetchjson)

---

# utils

## safeFetchJson

Safely fetch and attempt to parse the responses json.

**Signature**

```ts
export default function safeFetchJson<T>(input: RequestInfo | URL, init?: RequestInit | undefined)
```

**Example**

```ts
import { safeFetchJson } from '@jvlk/fp-ts-fetch'

safeFetchJson('api.com')() // => Either<Error, T>
```

Added in v1.1.0
