const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const userModel = require("./models/userModel");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
mongoose.connect("mongodb://localhost:27017/UserRegistrations");
// connectDB();
app.post("/register", async (req, res) => {
  const { email, password, name, dob, phoneno } = req.body;

  try {
    // Check if user already exists
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user
    user = new userModel({
      email,
      password,
      name,
      dob,
      phoneno,
    });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json("No Record Found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json("Incorrect password");
    }

    // Include additional user information in the response if needed
    const { name, dob, age, phoneno } = user;
    res
      .status(200)
      .json({ msg: "Success", user: { email, name, dob, age, phoneno } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await userModel.find();
    console.log(users);
    // Adjust the projection if needed
    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
