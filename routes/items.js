const express = require('express');
const router = express.Router();
const itemController = require('../controllers/items');
const { auth } = require('../middlewares');

router.get('/', itemController.getItems);
router.get('/details/:id', itemController.details);
router.patch('/patchQuantity', auth, itemController.patchQuantity);

router.post('/toggleLike', auth, itemController.toggleLike);
router.get('/getLike/:id', auth, itemController.getLike);
router.get('/getAllLikes', auth, itemController.getAllLikes);

router.post('/createOrder', auth, itemController.createOrder);
router.get('/getOrder', auth, itemController.getOrder);

router.post('/createRecentView', auth, itemController.createRecentView);
router.get('/getRecentView', auth, itemController.getRecentView);

module.exports = router;
