const router = require('express').Router();
const { Foodie } = require('../../models');

// POST to create Foodie
router.post('/', async (req, res) => {
    try {
        const foodieData = await Foodie.create({
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            phone_number: req.body.phone_number,
            zipcode: req.body.zipcode,
            password: req.body.password,
        });

        req.sessions.save(() => {
            req.session.logged_in = true;

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
            req.session.logged_in = true;

            res.json({ user: foodieData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// POST to logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;