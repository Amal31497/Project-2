const router = require('express').Router();
const { Chef, Cuisine, Dish } = require('../models')
const withAuth = require('../utils/auth');

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

router.get('/chef-profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const chefData = await Chef.findByPk(req.session.id,{
          
      });
  
    //   const chef = chefData.map((chef) => chef.get({ plain: true }));
  
    //   res.render('chef-profile', {
    //     ...chef,
    //     logged_in: true
    //   });
    console.log(chefData)
    res.send(chefData)
    } catch (err) {
      res.status(500).json(err);
    }
});


router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login')
})

router.get('/chef-signup', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/chef-signup');
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
