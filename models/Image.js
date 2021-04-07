const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chef_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'chef',
        key: 'id',
      },
    },
    dish_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'dish',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'image',
  }
);

module.exports = Image;
