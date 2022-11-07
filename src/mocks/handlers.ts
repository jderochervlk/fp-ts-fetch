import { rest } from 'msw'

export const handlers = [
  rest.post('www.api.com/200', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(await req.json()))
  }),
  rest.get('www.api.com/200', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ foo: 'bar' }))
  }),
  rest.get('www.api.com/200/body', (req, res, ctx) => {
    return res(ctx.status(200), ctx.body('This is a body response'))
  }),
  rest.post('www.api.com/500', (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ foo: 'bar' }))
  }),
  rest.get('www.api.com/500', (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ foo: 'bar' }))
  }),
]
