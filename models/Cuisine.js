const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cuisine extends Model {}

Cuisine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cuisine_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    chef_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'chef',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cuisine',
  }
);

module.exports = Cuisine;
