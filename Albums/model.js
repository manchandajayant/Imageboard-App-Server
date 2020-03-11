const Sequelize = require("sequelize");
const db = require("../db");

const Album = db.define("albums", {
  title: {
    type: Sequelize.STRING
  },
  Artist: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  }
});

module.exports = Album;
