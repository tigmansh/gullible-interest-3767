const express = require("express");
const { userRouter } = require("./routes/user.routes");
const { connection } = require("./configs/db");
const { authentication } = require("./middleware/authenticate");
const { bookingRouter } = require("./routes/booking.routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/users", userRouter);
app.use(authentication);
app.use("/bookings", bookingRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err.message);
  }
  console.log(`Server is running at port ${process.env.port}`);
});
