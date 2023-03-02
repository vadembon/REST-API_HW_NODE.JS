const express = require("express");

const ctrl = require("../../controllers/contacts");

const { walidateBody, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", walidateBody(schemas.addSchemaPost), ctrl.addContact);

router.put(
  "/:id",
  isValidId,
  walidateBody(schemas.addSchemaPut),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  walidateBody(schemas.addSchemaPatch),
  ctrl.updateFavorite
);

router.delete("/:id", isValidId, ctrl.removeContact);
module.exports = router;
