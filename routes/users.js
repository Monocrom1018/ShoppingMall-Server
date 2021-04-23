const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const { auth } = require('../middlewares');

router.post('/login', userController.login);
router.delete('/logout', userController.logout);
router.post('/signup', userController.signup);
router.post('/withdrawal', auth, userController.withdrawal);
router.get('/getUserData', auth, userController.getUserData);
router.patch('/patchUserInfo', auth, userController.patchUserInfo);

module.exports = router;
