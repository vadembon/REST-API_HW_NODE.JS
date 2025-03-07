const Joi = require("joi");

const addSchemaRegister = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
});
const addSchemaLogin = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
});

const addSchemaEmail = Joi.object({
  email: Joi.string().required().email(),
});

module.exports = {
  addSchemaRegister,
  addSchemaLogin,
  addSchemaEmail,
};
