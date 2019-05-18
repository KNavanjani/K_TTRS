const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();
app.use(express.json());
//Database confing
const db = config.get("mongoURI");
//Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected.."))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/tickets", require("./routes/api/tickets"));
app.use("/api/trains", require("./routes/api/trains"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/mobileBillPayment", require("./routes/api/mobileBillPayments"));
app.use("/api/creditCardPayment", require("./routes/api/creditCardPayments"));
app.use("/api/govEmps", require("./routes/api/govEmps"));

const port = process.env.PORT || 8280;

app.listen(port, () =>
  console.log(
    `Server statrted on port ${port}` + " and now listening for requests ... "
  )
);
