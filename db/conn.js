const Sequelize = require("sequelize");
const config = {};
if(process.env.QUITE){
  config.logging = false;
}
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_db", config
);

module.exports = conn;