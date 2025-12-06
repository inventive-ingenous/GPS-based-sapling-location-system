const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const saplingRoutes = require("./routes/saplings");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/saplings", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/saplings", saplingRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => console.log("Server running on port 3000"));
