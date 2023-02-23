const express = require("express");

require("dotenv").config();

const { userModel } = require("../models/user.model");

const { bookingModel } = require("../models/booking.model");

const adminRouter = express.Router();

adminRouter.post("/users", async (req, res) => {
  const { email, pass } = req.body;
  if (email === process.env.adminId && pass === process.env.adminPass) {
    try {
      const data = await userModel.find();
      res.send({ msg: data });
    } catch (err) {
      res.send({ err: err.message });
    }
  } else {
    res.send({ err: "You are not Authorized to go further." });
  }
});

adminRouter.post("/bookings", async (req, res) => {
  const { email, pass } = req.body;
  if (email === process.env.adminId && pass === process.env.adminPass) {
    try {
      const data = await bookingModel.find();
      res.send({ msg: data });
    } catch (err) {
      res.send({ err: err.message });
    }
  } else {
    res.send({ err: "You are not Authorized to go further." });
  }
});

module.exports = { adminRouter };
