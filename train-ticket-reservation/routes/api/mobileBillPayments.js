const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

//mobileBillPayment Model
const MobileBillPayment = require("../../models/mobileBillPayment");

//Get list of mobileBillPaymnt from the database
router.get("/", (req, res) => {
  MobileBillPayment.find().then(mobileBillPayments =>
    res.json(mobileBillPayments)
  );
});

//Add a new mobilebillPayment to the database
router.post("/", (req, res) => {
  const newMobileBillPayment = new MobileBillPayment({
    name: req.body.name,
    email: req.body.email,
    mobileNo: req.body.mobileNo,
    amount: req.body.amount,
    pinNo: req.body.pinNo
  });

  newMobileBillPayment
    .save()
    .then(mobileBillPayment => res.json(mobileBillPayment));

  /*
  var MPRef = Math.floor(Math.random() * 1000000 + 1);

  var output = `
  <p>Hello ${req.body.name}, </p>
  <p>We have recieved your payment of ${req.body.amount} LKR.</p>
  <p>Thank you very much for booking train tickets with Dialog Mobile Service </p>
  <h4>Your Transaction ID : TTR${MPRef}</h4>
    
  </p>
  <h3>In orderto continue the reservation procedure, please create a free account at Train Ticket Reservation and Book Train Tickets by filling and submiting the available form.</h3>
  <br/>
  <p>Thanks,</p>
  <p>Train Ticket Reservation<p>
  `;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "alpha.4spirits@gmail.com", // generated ethereal user
      pass: "SE__2019" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let mailOptions = {
    from: '"Train Ticket Reservation" <alpha.4spirits@gmail.com>',
    to: req.body.email,
    subject: "[Train Ticket Reservation] Payment Confirmation",
    text: "Hello",
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  */
});

module.exports = router;
