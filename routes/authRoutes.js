
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/login', authController.loginUser);
router.get('/profile', authMiddleware.verifyToken, authController.getProfile);

module.exports = router;