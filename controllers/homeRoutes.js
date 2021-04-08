const router = require('express').Router();

const { Chef, Cuisine, Dish, Image } = require('../models')

const withAuth = require('../utils/auth');

// GET ALL Chefs
router.get('/', async (req, res) => {
    try {
        const chefData = await Chef.findAll({
            include: [
                {
                model: Cuisine,
                include: [Dish]
                },
                {model:Image}
            ]
        })
        const chefs = chefData.map((chef) => chef.get({ plain: true }));
        res.render('homepage', {
            chefs,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(404).json(err)
    }
})

// GET Chef Page(Chef-profile future name)
router.get('/chef-page', withAuth, async(req,res)=>{
    try {
        // Find the logged in user based on the session ID
        const chefData = await Chef.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{
                model: Cuisine,
                include: [Dish]
            }],
        });

        const chef = chefData.get({ plain: true });

        res.render('chef-page', {
            ...chef,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET Search
router.get('/search', async (req, res) => {
    try {
        const searchChef = await Cuisine.findByPk(req.session.id, {
            include: [{
                Chef,
                attributes: ['first_name', 'description', 'zipcode'],
                include: [Dish]
            }]
        })
        const chefs = chefData.map((chef) => chef.get({ plain: true }));
        res.render('results', {
            ...chefs
        },
        )
    } catch (err) {
        res.status(404).json(err)
    }
})

// GET Chef profile and pass data
router.get('/chef-form', async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const chefData = await Chef.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{
                model: Cuisine,
                include: [Dish]
            }],
        });

        const chef = chefData.get({ plain: true });

        res.render('chef-form', {
            ...chef,
            logged_in: true
        });


    } catch (err) {
        res.status(500).json(err);
    }
});

// GET Chef Login
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/chef-form');
        return;
    }

    res.render('login')
})

// GET Chef Signup
router.get('/chef-signup', (req, res) => {
    if (req.session.logged_in) {

        res.redirect('/');
        return;
    }

    res.render('chef-signup')
})

// GET Foodie Signup
router.get('/foodie-signup', (req, res) => {
    if (req.session.logged_in) {

        res.redirect('/');
        return;
    }

    res.render('foodie-signup')
})

module.exports = router;
