// include express in order to use methods like .Router()
const express = require("express");
// reference to the videos file in order to write using writeJSONFile
const vegetablesFile = __dirname + "/../../models/vegetables.json";
// work with array of data from videos
const vegetables = require(vegetablesFile);

// helper functions: writeJSONFile & getNewId
// const helper = require("../../helper/helper");

// setup express router
const router = express.Router();

/**
 * Get all the vegetables but with fewer properties/keys
 */
router.get("/", (req, res) => {
  console.log("hello");
  const vegetableList = vegetables.map(vegetable => {
    return {
      id: vegetable.id,
      name: vegetable.name,
      latin: vegetable.latin,
      nutrition: vegetable.nutrition,
      description: vegetable.description
    };
  });
  res.json(vegetableList);
});

/**
 * Get vegetable by id
 */
router.get("/:id", (req, res) => {
  const found = vegetables.some(vegetable => vegetable.id === req.params.id);
  if (found) {
    res.json(vegetables.filter(vegetable => vegetable.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Vegetable with ID:${req.params.id} not found` });
  }
});

module.exports = router;
