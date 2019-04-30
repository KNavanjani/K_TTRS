const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create creditCardPaymentSchema
const CreditCardPaymentSchema = new Schema({
  name: {
    type: String,
    required: [false]
  },
  email: {
    type: String,
    required: [false]
  },
  cardNo: {
    type: String,
    required: [false]
  },
  amount: {
    type: Number,
    required: [false]
  },
  cvcNo: {
    type: Number,
    required: [false]
  }
});

const CreditCardPayment = mongoose.model(
  "creditCardPayment",
  CreditCardPaymentSchema
);

module.exports = CreditCardPayment;
