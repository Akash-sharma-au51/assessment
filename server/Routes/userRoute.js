const express = require('express');
const {registerUser,loginUser,logoutUser} = require('../controllers/userController');
const authorizeUser = require("../middlewares/auth")

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout',authorizeUser, logoutUser);

module.exports = router;