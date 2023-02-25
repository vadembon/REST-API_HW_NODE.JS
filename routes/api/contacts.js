const express = require("express");
const contacts = require("../../models/contacts");
const Joi = require("joi");

const { HttpError } = require("../../utils");

const addSchemaPost = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});
const addSchemaPut = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
});
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await contacts.listContacts();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await contacts.getContactById(id);
    if (!data) {
      throw HttpError(404, "Not found");
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { error } = addSchemaPost.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }

  const data = await contacts.addContact(req.body);
  res.status(201).json(data);
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await contacts.removeContact(id);
    if (!data) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json({
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = addSchemaPut.validate(req.body);
    if (error) {
      throw HttpError(400, "missing fields");
    }
    const { id } = req.params;
    const data = await contacts.updateContact(id, req.body);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
