const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dishes extends Model {}

Dishes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    image_name: {
      type: DataTypes.STRING,
  },
    cuisine_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cuisine',
        key: 'id',
      },
    },
    has_nuts:{
        type: DataTypes.BOOLEAN ,
    },
    has_dairy:{
        type: DataTypes.BOOLEAN ,
    },
    vegan:{
        type: DataTypes.BOOLEAN ,
    },
    has_gluten:{
        type: DataTypes.BOOLEAN,
    },
    has_shellfish:{
        type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dish',
  }
);

module.exports = Dishes;
