const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

//The `Restaurant` model should have name location and cuisine properties, all of which are strings
// TODO - create a Restaurant model

const sequelize = require("./db"); // Importing my connection from db.js
const { DataTypes } = require("sequelize");

const Restaurant = sequelize.define("Resturant", {
  name: DataTypes.STRING,
  location: DataTypes.STRING,
  cuisine: DataTypes.STRING,
//   rating: DataTypes.NUMBER,
});

module.exports = {Restaurant};