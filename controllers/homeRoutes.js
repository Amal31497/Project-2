const router = require('express').Router();
const { Chef, Cuisine, Dish } = require('../models')
const withAuth = require('../utils/auth');

// GET ALL Chefs
router.get('/', async (req, res) => {
    try {

        const chefData = await Chef.findAll({
            include: [{
                model: Cuisine,
                include: [Dish]
            }]
        })

        const chefs = chefData.map((chef) => chef.get({ plain: true }));

        res.render('homepage', {
            chefs
        })
    } catch (err) {
        res.status(404).json(err)
    }
})

// GET Chef Profile
router.get('/chef-profile', withAuth, async (req, res) => {
    try {
        const chefData = await Chef.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Cuisine }],
        });

        const chef = chefData.map((chef) => chef.get({ plain: true }));

        res.render('chef-profile', {
            ...chef,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGIN 
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login')
})

// GET Chef Signup
router.get('/chef-signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('chef-signup')
})

// GET Foodie Signup
router.get('/foodie-signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('foodie-signup')
})

module.exports = router;
