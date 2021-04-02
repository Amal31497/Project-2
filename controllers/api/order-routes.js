const router = require('express').Router();
const { Order } = require('../../models');

// CREATE an order
router.post('/', async (req, res) => {
    try {
        const orderData = await Order.create(req.body);
        res.status(200).json(orderData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE an order
router.delete('/:id', async (req, res) => {
    try {
        const orderData = await Order.destroy({
            where: { id: req.params.id }
        });

        if(!orderData) {
            res.status(404).json({ message: 'No order was found!'})
            return;
        }
        res.status(200).json(orderData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;