const router = require('express').Router();
const { Cuisine, Chef } = require('../../models');

// GET all Cuisine
router.get('/', async (req, res) => {
    try {
        const cuisineData = await Cuisine.findAll({
            include: [
                {
                    model: Chef,
                    attributes: ['first_name', 'last_name', 'email', 'zipcode']
                }
            ]
        });
        res.status(200).json(cuisineData)
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single Cuisine 
router.get('/:id', async (req, res) => {
    try {
        const cuisineData = await Cuisine.findByPk(req.params.id, {
            include: [
                {
                    model: Chef,
                    attributes: ['first_name', 'last_name', 'email', 'zipcode']
                }
            ]
        });

        if (!cuisineData) {
            res.status(404).json({ message: 'No cuisine found with that id!'});
        }

        res.status(200).json(cuisineData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE a Cuisine
router.post('/', async (req, res) => {
    try {
        const cuisineData = await Cuisine.create(req.body);

        res.status(200).json(cuisineData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE a Cuisine
router.put('/:id', async (req, res) => {
    try {
        const cuisineData = await Cuisine.update(req.body, {
            where: {
                id: req.params.id,
            }
        });

        if (!cuisineData[0]) {
            res.status(404).json({ message: 'No cuisine found with this id!' });
        }

        res.status(200).json(cuisineData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE a Cuisine
router.delete('/:id', async (req, res) => {
    try {
        const cuisineData = await Cuisine.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!cuisineData) {
            res.status(404).json({ message: 'No cuisine found with this id!' });
        }

        res.status(200).json(cuisineData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;