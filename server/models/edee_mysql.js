const Sequelize = require("sequelize");
const sequelizedDb = new Sequelize("db", "db", "db", {
  host: "localhost",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelizedDb
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const models = sequelizedDb.models;
Object.keys(sequelizedDb.models).forEach(function(modelName) {
  if ("associate" in sequelizedDb.models[modelName]) {
    sequelizedDb.models[modelName].associate();
  }
});
sequelizedDb.sync();

module.exports = sequelizedDb;
