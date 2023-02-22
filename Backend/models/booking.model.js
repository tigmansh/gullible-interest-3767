const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    start_location: String,
    start_date: String,
    end_location: String,
    end_date: String,
    vechile_type: String,
    userID:String
  },
  {
    versionKey: false,
  }
);

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = { bookingModel };
