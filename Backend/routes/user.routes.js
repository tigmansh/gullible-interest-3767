const express = require("express");

const { userModel } = require("../models/user.model");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const userRouter = express.Router();

// register and hashing the password...

userRouter.post("/register", async (req, res) => {
  const {
    country,
    firstname,
    lastname,
    age,
    mobile,
    email,
    pass,
    address,
    zipcode,
  } = req.body;

  const x = await userModel.findOne({ email: req.body.email });
  if (x) {
    res.send({ err: "This email-id is already registered" });
  } else {
    try {
      bcrypt.hash(pass, 8, async (err, hash) => {
        if (!err) {
          const user = new userModel({
            country,
            firstname,
            lastname,
            age,
            mobile,
            email,
            pass: hash,
            address,
            zipcode,
          });
          await user.save();
          res.send({ msg: `Welcome ${req.body.firstname} you are registered` });
        } else {
          res.send({ err: err.message });
        }
      });
    } catch (err) {
      res.send({ err: err.message });
    }
  }
});

// login and bcrypting the password...

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const user = await userModel.find({ email });
  try {
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, process.env.key, {
            expiresIn: "3h",
          });
          res.send({
            msg: `Hello ${user[0].firstname} you are logged in successfully`,
            token: token,
          });
        } else {
          res.send({ err: "Wrong Password 🔑" });
        }
      });
    } else {
      res.send({
        err:
          "You are not registered or Maybe you entered a wrong email address",
      });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
});

module.exports = { userRouter };
