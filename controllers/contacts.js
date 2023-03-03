const Contact = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../utils");

const listContacts = async (req, res) => {
  const data = await Contact.find();
  res.json(data);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const data = await Contact.findById(id);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

const addContact = async (req, res) => {
  const data = await Contact.create(req.body);
  res.status(201).json(data);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const data = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(data);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const data = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(data);
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  const data = await Contact.findByIdAndRemove(id);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({
    message: "contact deleted",
  });
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavorite: ctrlWrapper(updateFavorite),
  removeContact: ctrlWrapper(removeContact),
};
