const router = require('express').Router();
const path = require('path');
const { Chef, Cuisine, Dish } = require('../models')


router.get('/', async (req,res)=>{
    try {

        const chefData = await Chef.findAll({
            include:[{
              model:Cuisine,
              include:[Dish]
            }]
        })

        const chefs = chefData.map((chef) => chef.get({ plain: true }));

        res.render('homepage',{
            chefs
        })
    } catch (err) {
        res.status(404).json(err)
    }
})

router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }

    res.render('login')
})

router.get('/chef-signup', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }

    res.render('chef-signup')
})

router.get('/foodie-signup', (req,res)=>{
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }

    res.render('foodie-signup')
})


module.exports = router;
