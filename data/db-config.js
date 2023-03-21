const knex = require("knex");
const config = require("../knexfile");
const environment = process.env.NODE_ENV || "development";

console.log(config[process.env.NODE_ENV])

module.exports = knex(config[environment]);