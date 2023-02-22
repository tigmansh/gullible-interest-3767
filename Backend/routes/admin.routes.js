const express = require("express");

require("dotenv").config();

const { userModel } = require("../models/user.model");

const { bookingModel } = require("../models/booking.model");

const adminRouter = express.Router();

adminRouter.get("/users", async (req, res) => {
  const { email, pass } = req.body;
  if (email === process.env.adminId && pass === process.env.adminPass) {
    try {
      const data = await userModel.find();
      res.send(data);
    } catch (err) {
      res.send({ Error: err.message });
    }
  } else {
    res.send({ Error: "You are not Authorized to go further." });
  }
});

adminRouter.get("/bookings", async (req, res) => {
  const { email, pass } = req.body;
  if (email === process.env.adminId && pass === process.env.adminPass) {
    try {
      const data = await bookingModel.find();
      res.send(data);
    } catch (err) {
      res.send({ Error: err.message });
    }
  } else {
    res.send({ Error: "You are not Authorized to go further." });
  }
});

module.exports = { adminRouter };
