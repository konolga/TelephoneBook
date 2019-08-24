const express = require("express");
const {signup, login, signout, resetPassword, forgotPassword, socialLogin} = require ("../controllers/auth");
const {userSignupValidator, passwordResetValidator} = require("../validator");

const router = express.Router();

router.post("/login", login);
router.post("/signup", userSignupValidator, signup);
router.post("/social-login", socialLogin);

router.get("/signout", signout);
/* router.put("/forgot-password", forgotPassword)
router.put("/reset-password",passwordResetValidator, resetPassword) */
module.exports = router;
