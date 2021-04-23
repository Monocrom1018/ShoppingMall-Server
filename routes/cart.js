const express = require('express');
const router = express.Router();
const cartController = require('../controllers/carts');
const { auth } = require('../middlewares');

router.post('/createCart', auth, cartController.createCart);
router.get('/getCart', auth, cartController.getCart);
router.delete('/deleteCart/:id', auth, cartController.deleteCart);

module.exports = router;
