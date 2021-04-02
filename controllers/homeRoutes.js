const router = require('express').Router();
const path = require('path');
const { Chef, Cuisine } = require('../models')

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
