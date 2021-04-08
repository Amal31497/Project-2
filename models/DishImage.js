const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DishImage extends Model {}

DishImage.init(
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
    modelName: 'dishImage',
  }
);

module.exports = DishImage;
