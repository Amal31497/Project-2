const Chef = require("./Chef");
const Foodie = require("./Foodie");
const Cuisine = require("./Cuisine");
const Dish = require("./Dishes");
const Order = require("./Orders");

Chef.hasOne(Cuisine, {
    foreignKey: "chef_id",
});
Cuisine.belongsTo(Chef, {
    foreignKey: "chef_id",
});

Cuisine.hasMany(Dish, {
  foreignKey: "cuisine_id",
    //onDelete: "CASCADE"
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

module.exports = { Chef, Foodie, Cuisine, Dish, Order };
