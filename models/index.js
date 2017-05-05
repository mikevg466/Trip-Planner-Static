const Sequelize = require('sequelize');
const db = require('./db');

const Activity = require('./activity');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Place = require('./place');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;
