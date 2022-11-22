const express = require("express");
const router = express.Router();

const Disc = require("../models/discussion.model");

router.get("/", async (req, res) => {
  try {
    const getAllDisc = await Disc.find();
    res.json(getAllDisc);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Disc({
    name: req.body.name,
    contenu: req.body.contenu
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:discId", async (req, res) => {
  try {
    const getOneDisc = await Disc.findById(req.params.discId);
    res.json(getOneDisc);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:discId", async (req, res) => {
  try {
    const removeDisc = await Disc.remove({ _id: req.params.discId });
    res.json(removeDisc);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:discId", async (req, res) => {
  try {
    const updateDisc = await Disc.updateOne(
      { _id: req.params.discId },
      { $set: { contenu: req.body.contenu } }
    );

    res.json(updateDisc);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
