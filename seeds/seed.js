const sequelize = require('../config/connection');
const { Chef, Dish, Foodie, Cuisine, Image, DishImage } = require('../models');


const chefData = require('./chefData.json');
const dishData = require('./dishData.json');
const foodieData = require('./foodieData.json');
const cuisineData = require('./cuisineData.json');
const imageData = require('./imageData.json');
const dishImageData = require('./dishImageData.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const chef = await Chef.bulkCreate(chefData, {
    individualHooks: true,
    returning: true,
  });

  for (const cuisine of cuisineData) {
    await Cuisine.create({
      ...cuisine,
    });
  }

  for (const dish of dishData) {
    await Dish.create({
      ...dish,
    });

  }
  for (const foodie of foodieData) {
    await Foodie.create({
      ...foodie,
    });
  }

  for (const image of imageData) {
    await Image.create({
      ...image,
    });
  }

  for (const dishImage of dishImageData) {
    await DishImage.create({
      ...dishImage,
    });
  }

  process.exit(0);
};

seedDatabase();