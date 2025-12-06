const express = require("express");
const router = express.Router();
const Sapling = require("../models/Sapling");

// POST data
router.post("/", async (req, res) => {
  try {
    const sapling = new Sapling(req.body);
    await sapling.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// GET all saplings
router.get("/", async (req, res) => {
  const saplings = await Sapling.find();
  res.json(saplings);
});

module.exports = router;
