const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));

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

const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(
    `Server statrted on port ${port}` + " and now listening for requests ... "
  )
);

/*
//***
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");

//******
//View Engine setup
app.engine("handlebars", exphbs());
app.set("view-engine", "handlebars");

//BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Static folder
app.use(
  "/client/src/components/BookASeatModal",
  express.static(path.join(__dirname, "/client/src/components/BookASeatModal"))
);

app.post("/send", (req, res) => {
  const output = `
  <p>Booking Confirmation</p>
  <h3>Name: ${req.body.name}</h3>
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo " <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

*/
