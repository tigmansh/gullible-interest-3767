const express = require("express");

const { bookingModel } = require("../models/booking.model");

require("dotenv").config();

const bookingRouter = express.Router();

bookingRouter.get("/", async (req, res) => {
  try {
    const data = await bookingModel.find({ userID: req.body.userID });
    if (data.length > 0) {
      res.send(data);
    } else {
      res.send({ msg: "No past bookings found" });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
});

// Make a booking on drivify...

bookingRouter.post("/dobooking", async (req, res) => {
  const booking = req.body;
  try {
    const traveling = new bookingModel(booking);
    await traveling.save();
    res.send(
      `Your booking from ${traveling.start_location} to ${traveling.end_location} is done, Happy journey 🎉`
    );
  } catch (err) {
    res.send({ Error: err.message });
  }
});

// update the booking...

bookingRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  const travel = await bookingModel.findOne({ _id: id });
  try {
    if (travel.userID === req.body.userID) {
      await bookingModel.findByIdAndUpdate({ _id: id }, payload);
      res.send(`Your booking for ${travel.start_date} is updated 👍`);
    } else {
      res.send({ msg: "You don't have authority to do this" });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
});

// Cancel the booking...

bookingRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const travel = await bookingModel.findOne({ _id: id });
  try {
    if (travel.userID === req.body.userID) {
      await bookingModel.findByIdAndDelete({ _id: id });
      res.send(`Your booking for ${travel.start_date} is canceled 👍`);
    } else {
      res.send({ msg: "You don't have authority to do this" });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
});

module.exports = { bookingRouter };
