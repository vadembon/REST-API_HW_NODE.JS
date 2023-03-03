const Joi = require("joi");

const addSchemaPost = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
const addSchemaPut = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const addSchemaPatch = Joi.object({
  favorite: Joi.boolean().required(),
});
module.exports = {
  addSchemaPost,
  addSchemaPut,
  addSchemaPatch,
};
