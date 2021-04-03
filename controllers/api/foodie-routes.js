const router = require('express').Router();
const { Foodie } = require('../../models');

// POST to create Foodie
router.post('/', async (req, res) => {
    try {
        const foodieData = await Foodie.create(req.body);

        req.sessions.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(foodieData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// POST to login
router.post('/login', async (req, res) => {
    try {
        const foodieData = await Foodie.findOne({ where: { email: req.body.email } });
        
        if (!foodieData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again!'});
            return;
        }

        const validPassword = await foodieData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again!'});
            return;
        }

        req.session.save(() => {
            req.session.foodie_id = foodieData.id;
            req.session.loggedIn = true;

            res.json({ user: foodieData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// POST to logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;