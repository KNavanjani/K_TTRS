/*
var mongoose = require();
var schema = mongoose.model("creditcard");

const nodemailer = require("nodemailer");

var output = `
 <b>Train Ticket Reservation</b>
 <p>Dear Customer, We have recieved your payment of ${req.body.amount} LKR.
Thank you for booking train tickets with Train Ticket Reservation.</p>
 `;
let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth: {
    user: "alpha.4spirits@gmail.com",
    pass: "SE__2019"
  },
  tls: {
    rejectUnauthorized: false
  }
});
let mailOptions = {
  from: '"Train Ticket Reservation" <alpha.4spirits@gmail.com>',
  to: req.body.email,
  subject: "Payment Confirmation",
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
