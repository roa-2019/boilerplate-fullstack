const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

module.exports = {
  getFruits,
  saveFruit
}

function saveFruit (fruit, db=db) {
  return db('fruit').insert(fruit)
}

function getFruits (db=db) {
  return db('fruit').select()
}
