const express = require("express");

const {basedir} = global;

const ctrl = require(`${basedir}/controllers/auth`);

const {ctrlWrapper} = require(`${basedir}/helpers`);

const {auth, upload} = require(`${basedir}/middlewares`);

const router = express.Router();

// signup
router.post("/register", ctrlWrapper(ctrl.register));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post("/verify", ctrlWrapper(ctrl.resendVerifyEmail));

// signin
router.post("/login", ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(ctrl.setAvatar));

module.exports = router;