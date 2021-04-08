const router = require('express').Router();
const { Chef, Cuisine, Dish } = require('../../models');

// GET Search (with res.status)
// router.get('/:zipcode', async (req, res) => {
//     try {
//         const result = await Chef.findAll({
//             where: {
//                 zipcode: req.params.zipcode
//             },
//         });

//         console.log(result);
//         const resultData = await result.get({ plain: true });
//         console.log(resultData);

//         res.status(200).json(resultData);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

// GET Search (with res.render)
// router.get('/:zipcode', async (req, res) => {
//     try {
//         const searchChef = await Chef.findAll({
//             where: { zipcode: req.params.zipcode }
//         });

//         console.log(searchChef);
//         const chefs = searchChef.map((chef) => chef.get({ plain: true }));
//         res.render('/results', {
//             ...chefs
//         });
//         console.log(chefs);
//     } catch (err) {
//         res.status(404).json(err)
//     }
// });


module.exports = router;