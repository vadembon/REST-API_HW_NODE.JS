const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const authorized = require("./authorized");
const upload = require("./upload");

module.exports = {
  authorized,
  validateBody,
  isValidId,
  upload,
};
