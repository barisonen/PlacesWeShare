const express = require('express');
const { check } = require('express-validator');

const placesControllers = require('../controllers/places-controllers');
const fileUplaod = require('../middleware/file-upload');

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);

router.post(
  '/', 
  fileUplaod.single('image'),
  [
    check('title').notEmpty(),
    check('description').isLength({ min: 5 }),
    check('address').notEmpty()
  ],
  placesControllers.createPlace);

router.patch(
  '/:pid', 
  [
    check('title')
      .not()
      .isEmpty(),
    check('description')
      .isLength({ min: 5 }),
  ],
  placesControllers.updatePlace);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;