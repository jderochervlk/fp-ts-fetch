---
title: Home
nav_order: 1
---

# @jvlk/fp-ts-fetch

An `fp-ts` library to make it easy to work with fetch requests.

There are two main functions.

`safeFetch('url')` is equivalent to `fetch('url')`.

`safeFetchJson('url')` is equivalent to `fetch('url').then(res => res.json())`.