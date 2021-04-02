const router = require('express').Router();
// add additional api routes
const dishRoutes = require('./dishRoutes');

router.use('/dishes', dishRoutes);

module.exports = router;
