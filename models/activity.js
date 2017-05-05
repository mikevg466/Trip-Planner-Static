const db = require('./db');
const Sequelize = require('sequelize');

const Activity = db.define('name', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Activity;