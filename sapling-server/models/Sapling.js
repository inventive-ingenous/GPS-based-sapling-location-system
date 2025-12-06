const mongoose = require("mongoose");

const SaplingSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Sapling", SaplingSchema);
