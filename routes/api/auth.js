const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateBody, authorized, upload } = require("../../middlewares");
const {
  addSchemaRegister,
  addSchemaLogin,
  addSchemaEmail,
} = require("../../schemas/users");
const router = express.Router();

router.post("/register", validateBody(addSchemaRegister), ctrl.register);
router.get("/verify/:verificationToken", ctrl.verifyEmail);
router.post("/verify", validateBody(addSchemaEmail), ctrl.resendVerifyEmail);
router.post("/login", validateBody(addSchemaLogin), ctrl.login);
router.get("/current", authorized, ctrl.getCurrent);
router.post("/logout", authorized, ctrl.logout);
router.patch(
  "/avatars",
  authorized,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
