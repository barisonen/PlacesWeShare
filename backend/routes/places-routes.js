const express = require('express');
const { check } = require('express-validator');

const placesControllers = require('../controllers/places-controllers');
const checkAuth = require('../middleware/check-auth');
const fileUplaod = require('../middleware/file-upload');

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);

router.use(checkAuth);

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