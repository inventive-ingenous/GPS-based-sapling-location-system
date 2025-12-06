const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ---------------- MongoDB -------------------
mongoose.connect("mongodb://localhost:27017/saplings", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ---------------- Schema --------------------
const Sapling = mongoose.model("Sapling", {
  lat: Number,
  lng: Number,
  timestamp: { type: Date, default: Date.now }
});

// ------------ Store GPS Data ----------------
app.post("/addSapling", async (req, res) => {
  try {
    const sapling = new Sapling({
      lat: req.body.lat,
      lng: req.body.lng
    });
    await sapling.save();
    res.json({ success: true, message: "Saved!" });
  } catch (error) {
    res.json({ success: false, error });
  }
});

// ---------- Get All Saplings ---------------
app.get("/saplings", async (req, res) => {
  const data = await Sapling.find();
  res.json(data);
});

// ------------ Start Server -----------------
app.listen(3000, () => console.log("API running on port 3000"));
