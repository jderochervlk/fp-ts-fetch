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
  - [FetchError (type alias)](#fetcherror-type-alias)
  - [ServerError (type alias)](#servererror-type-alias)
  - [safeFetch](#safefetch)

---

# utils

## FetchError (type alias)

**Signature**

```ts
export type FetchError = Error
```

Added in v1.2.0

Something went wrong with the fetch request and was unable to reach the server.

## ServerError (type alias)

**Signature**

```ts
export type ServerError = Response
```

Added in v1.2.0

A server error response with a `status` and `statusText`.

## safeFetch

Wraps `fetch` in a `TaskEither.tryCatch`.

**Signature**

```ts
export default function safeFetch(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): TaskEither<ServerError | FetchError, Response>
```

**Example**

```ts
import { safeFetch } from '@jvlk/fp-ts-fetch'

safeFetch('testing.com')
```

Added in v1.0.0
