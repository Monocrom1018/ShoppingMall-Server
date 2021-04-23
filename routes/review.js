const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviews');
const { auth } = require('../middlewares');

router.post('/write', auth, reviewController.createReview);
router.get('/getAll/:id', reviewController.getAll);
router.patch('/update', auth, reviewController.patchReview);
router.get('/getTarget/:id', auth, reviewController.getTarget);

module.exports = router;
