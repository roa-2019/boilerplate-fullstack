const config = require('../knexfile').test
const connection = require('knex')(config)

const {saveFruit} = require('../server/db')

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

test('saveFruit', () => {
  expect.assertions(1)
  return saveFruit({name: 'mango'}, connection).then(() => {
    return connection('fruit').select().then(fruits => {
      expect(fruits.length).toBe(4)
    })
  })
})
