const Chef = require("./Chef");
const Foodie = require("./Foodie");
const Cuisine = require("./Cuisine");
const Dish = require("./Dishes");
const Order = require("./Orders");
const Image = require("./Image");
const DishImage = require("./DishImage");

Chef.hasMany(Cuisine, {
    foreignKey: "chef_id",
});
Cuisine.belongsTo(Chef, {
    foreignKey: "chef_id",
    onDelete:"CASCADE"
});

Cuisine.hasMany(Dish, {
  foreignKey: "cuisine_id",
  onDelete: "CASCADE"
});

Dish.belongsTo(Cuisine, {
    foreignKey: "cuisine_id",
});

Foodie.hasMany(Order, {
    foreignKey: "foodie_id",
    onDelete: "CASCADE"
});

Order.belongsTo(Foodie, {
    foreignKey: "foodie_id",
});
Chef.hasOne(Image,{
    foreignKey:"chef_id",
})
Image.belongsTo(Chef, {
    foreignKey: "chef_id",
})
Dish.hasMany(Image, {
    foreignKey: "dish_id",
})
DishImage.belongsTo(Dish, {
    foreignKey: "dish_id",
})
module.exports = { Chef, Foodie, Cuisine, Dish, Order, Image, DishImage };
