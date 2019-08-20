const express = require("express");
const Contact = require("../models/contact.model");
const router = express.Router();


router.post("", (req, res, next) => {
  const contact = new Contact({
    name: req.body.name,
    telephone: req.body.telephone
  })
  contact.save().then(createdContact => {
    res.status(201).json({
      message: "Contact added successfully",
      contactId: createdContact._id
    });
  });
});


router.get("", (req, res, next) => {
  Contact.find().then(contacts => {
    res.status(200).json({
      message: "Contacts fetched successfully!",
      contacts: contacts
    });
  });
});

router.delete("/:id", (req, res, next) => {
  Contact.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: "Contact deleted!" });
  });
});


router.get("/:id", (req, res, next) => {
  Contact.findById(req.params.id).then(contact => {
    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).json({ message: "contact not found!" });
    }
  });
});

router.put("/:id", (req, res, next) => {
  const contact = new Contact({
    _id: req.body.id,
    name: req.body.name,
    telephone: req.body.telephone
  });
  Contact.updateOne({ _id: req.params.id }, contact).then(result => {
    res.status(200).json({ message: "Update successful!" });
  });
});

module.exports = router;
