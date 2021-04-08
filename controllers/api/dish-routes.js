const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Dish, Cuisine, Chef } = require('../../models');
const express = require('express');


const aws = require('aws-sdk');

const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid').v4;
const path = require('path');

const app = express();

const s3 = new aws.S3({ apiVersion: '2006-03-01'});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'chefimages',
        metadata: (req,file,cb) =>{
            cb(null, {fieldName: file.fieldname });
        },
        key: (req,file,cb) => {
            const ext = path.extname(file.originalname);
            
            const fileUname = uuid();

            cb(null, `${fileUname}${ext}`);
            
            const chefID = req.session.user_id;

            const cuisineID = Cuisine.findOne({where: {cuisine_id: chefID}}) ;

            // const dish = Dish.findOne({})

            console.log(dish);

            
            console.log(cuisineID);
            const fullName = fileUname+ext;
            console.log(fullName);

            Dish.update(
              {
                image_name:fullName,
            },
            {
              where:{
                cuisine_id: cuisineID,
              }
            })
            .then(
              (updated) =>{
                res.json(updated)
              }
            ).catch((err) =>{
              res.json(err)
            });
        }

    })
})

router.post('/uploadDish', upload.array('avatar'), (req,res) =>{
  return res.json({status: "OK", uploaded: req.files.length});
});

















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
router.get('/:id', withAuth, async (req, res) => {
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
router.post('/', withAuth, async (req, res) => {
    try {
        const dishData = await Dish.create(req.body);

        res.status(200).json(dishData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE a Dish
router.put('/:id', withAuth, async (req, res) => {
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
router.delete('/:id', withAuth, async (req, res) => {
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