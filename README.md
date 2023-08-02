# @jvlk/fp-ts-fetch

Fetch wrappers for `fp-ts`.

## Examples
```ts
// safeFetch
import { safeFetch } from '@jvlk/fp-ts-fetch'

safeFetch('testing.com')
```

```ts
import { safeFetchJson } from '@jvlk/fp-ts-fetch'

safeFetchJson('api.com')() // => Either<Error, T>

```

## Installing
```
npm i @jvlk/fp-ts-fetch
```

```
yarn add @jvlk/fp-ts-fetch
```