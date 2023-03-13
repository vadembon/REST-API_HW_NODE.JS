const walidateBody = require("./walidateBody");
const isValidId = require("./isValidId");
const authorized = require("./authorized");
const upload = require("./upload");

module.exports = {
  authorized,
  walidateBody,
  isValidId,
  upload,
};
