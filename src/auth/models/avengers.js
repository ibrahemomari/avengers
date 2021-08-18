"use strict";

const avengersModel = (sequelize, DataTypes) => {
  const model = sequelize.define("avengers", {
    favHero: { type: DataTypes.STRING },
    favValin: { type: DataTypes.STRING },
    favMovie: { type: DataTypes.STRING },
    userId:{type: DataTypes.INTEGER }
  });
  return model;
};


module.exports=avengersModel;