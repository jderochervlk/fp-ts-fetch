import { safeFetchJson } from '../../src'

safeFetchJson('api.com')() // => Either<Error, T>
