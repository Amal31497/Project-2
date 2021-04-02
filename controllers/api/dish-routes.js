const router = require('express').Router();
const { Dish, Cuisine } = require('../../models');

// GET all Dishes
router.get('/', async (req, res) => {
    try {
        const dishData = await Dish.findAll();
        res.status(200).json(dishData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single Dish
router.get('/:id', async (req, res) => {
    try {
        const dishData = await Dish.findByPk(req.params.id, {
            include: [
                {
                    model: Cuisine,
                    attributes: ['id', 'cuisine_name', 'description', 'chef_id']
                }
            ]
        });

        if (!dishData) {
            res.status(404).json({ message: 'No dish found with this id!' });
        }

        res.status(200).json(dishData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE a Dish
router.post('/', async (req, res) => {
    try {
        const dishData = await Dish.create(req.body);

        res.status(200).json(dishData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE a Dish
router.put('/:id', async (req, res) => {
    try {
        const dishData = await Dish.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!dishData[0]) {
            res.status(404).json({ message: 'No dish found with this id!' });
        }

        res.status(200).json(dishData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE a Dish
router.delete('/:id', async (req, res) => {
    try {
        const dishData = await Dish.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!dishData) {
            res.status(404).json({ message: 'No dish found with this id!' });
        }

        res.status(200).json(dishData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;