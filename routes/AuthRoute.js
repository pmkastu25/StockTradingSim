const {Signup, Login, verifyUser, logoutUser} = require("../controller/AuthController")
const express = require("express")
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/signup", Signup);
router.post("/login",Login);
router.get("/logout", logoutUser);

router.get("/verify", verifyUser);

module.exports = router;