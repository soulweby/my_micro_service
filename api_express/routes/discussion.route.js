const express = require("express");
const router = express.Router();

const Disc = require("../models/discussion.model");

router.get("/", async (req, res) => {
  try{
    const getDisc = await Disc.find();
    res.json(getDisc);
  }catch(err){
    res.json({message:err});
  }
});

router.post("/", async (req, res) => {
  const post = new Disc({
    contenu: req.body.contenu,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
