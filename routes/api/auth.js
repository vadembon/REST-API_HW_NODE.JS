const express = require("express");
const ctrl = require("../../controllers/auth");
const { walidateBody, authorized, upload } = require("../../middlewares");
const { addSchemaRegister, addSchemaLogin } = require("../../schemas/users");
const router = express.Router();

router.post("/register", walidateBody(addSchemaRegister), ctrl.register);
router.post("/login", walidateBody(addSchemaLogin), ctrl.login);
router.get("/current", authorized, ctrl.getCurrent);
router.post("/logout", authorized, ctrl.logout);
router.patch(
  "/avatars",
  authorized,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
