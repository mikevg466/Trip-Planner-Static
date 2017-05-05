const sequelize = require('sequelize');
const db = sequelize('postgres://localhost:5432/TripPlanner');

module.exports = db;
