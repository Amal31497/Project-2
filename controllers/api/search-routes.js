const router = require('express').Router();
const { Chef, Cuisine, Dish } = require('../../models');

// GET all 
router.get('/:id/:zipcode',async (req, res) => {
    try {
        const searchCuisine = await Cuisine.findOne({
            where: { 
                id: req.params.id
            },
            include: [
                {
                    model: Chef,
                    where: { zipcode: req.params.zipcode },
                },
                {
                    model: Dish,
                },
            ]
        });

        if(!searchCuisine) {
            res.status(404).json({ message: 'No Chef found with that zipcode!' });
        }

        res.status(200).json(searchCuisine);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;