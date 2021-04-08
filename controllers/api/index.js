const router = require('express').Router();
// add additional api routes
const chefRoutes = require('./chef-routes');
const cuisineRoutes = require('./cuisine-routes');
const dishRoutes = require('./dish-routes');
const foodieRoutes = require('./foodie-routes');
const orderRoutes = require('./order-routes');
const searchRoutes = require('./search-routes');
//const imageRoutes = require('./image-routes');

router.use('/chefs', chefRoutes);
router.use('/cuisines', cuisineRoutes);
router.use('/dishes', dishRoutes);
router.use('/foodies', foodieRoutes);
router.use('/orders', orderRoutes);
router.use('/search', searchRoutes);
///router.use('/image, imageRoutes');

module.exports = router;
