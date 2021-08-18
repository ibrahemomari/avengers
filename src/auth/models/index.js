"use strict";
require("dotenv").config();
const user = require("./users");
const { Sequelize, DataTypes } = require("sequelize");
const DATABASE_URL = process.env.DATABASE_URL;
const avengers=require('./avengers');
const Collection=require('./dataCollection');
const sequelize = new Sequelize(DATABASE_URL,{});

const userModel=user(sequelize,DataTypes);
const avengersModel=avengers(sequelize,DataTypes);

userModel.hasMany(avengersModel, { foreignKey: 'userId', sourceKey: 'id'});
avengersModel.belongsTo(userModel, { foreignKey: 'userId', targetKey: 'id'});

const avengersCollection=new Collection(avengersModel);



module.exports = {
  db: sequelize,
  users:userModel,
  avengersCollection:avengersCollection,
};