const express = require("express");
const { authMiddleware } = require("../middlewares/auth");
const {registerUser,loginUser,logoutUser} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authMiddleware, logoutUser);

module.exports = router;