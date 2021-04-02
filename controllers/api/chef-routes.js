const router = require('express').Router();
const { Chef } = require('../../models');

// CREATE new Chef sign up
router.post('/', async (req, res) => {
  try {
    const dbChefData = await Chef.create({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      phone_number: req.body.phone_number,
      zipcode: req.body.zipcode,
      password: req.body.password,
      cuisine_id: req.body.cuisine_id

    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbChefData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbChefData = await Chef.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbChefData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbChefData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
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
