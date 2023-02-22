const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    country: String,
    firstname: String,
    lastname: String,
    age: Number,
    mobile: Number,
    email: String,
    pass: String,
    address: String,
    zipcode: Number,
  },
  {
    versionKey: false,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
