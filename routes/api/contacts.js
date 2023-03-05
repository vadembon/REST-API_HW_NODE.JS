const express = require("express");

const ctrl = require("../../controllers/contacts");

const { walidateBody, isValidId, authorized } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authorized, ctrl.listContacts);

router.get("/:id", authorized, isValidId, ctrl.getContactById);

router.post(
  "/",
  authorized,
  walidateBody(schemas.addSchemaPost),
  ctrl.addContact
);

router.put(
  "/:id",
  authorized,
  isValidId,
  walidateBody(schemas.addSchemaPut),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  authorized,
  isValidId,
  walidateBody(schemas.addSchemaPatch),
  ctrl.updateFavorite
);

router.delete("/:id", authorized, isValidId, ctrl.removeContact);
module.exports = router;
