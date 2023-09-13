const Person = require("../models/personModel");

const createPerson = async (req, res) => {
  try {
    const { name } = req.body;
    if (typeof name !== "string" || name.trim() === "") {
      return res
        .status(422)
        .json({ error: "Name should be a non-empty string" });
    }
    const person = new Person({ name });
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

const getPerson = async (req, res) => {
  try {
    const person = await Person.findById(req.params.user_id);
    if (!person) {
      res.status(404).json({ error: "Person not found" });
    } else {
      res.status(200).json(person);
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

const updatePerson = async (req, res) => {
  try {
    const { name } = req.body;
    const person = await Person.findByIdAndUpdate(
      req.params.user_id,
      { name },
      { new: true }
    );
    if (!person) {
      res.status(404).json({ error: "Person not found" });
    } else {
      res.status(200).json(person);
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

const deletePerson = async (req, res) => {
  try {
    const person = await Person.findById(req.params.user_id);
    if (!person) {
      res.status(404).json({ error: "Person not found" });
    }
    await Person.deleteOne({ _id: req.params.user_id });
    res.status(200).json("Person successfully deleted");
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
