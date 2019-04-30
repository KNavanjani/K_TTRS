const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create mobileBillPaymentSchema
const mobileBillPaymentSchema = new Schema({
  name: {
    type: String,
    required: [false]
  },
  email: {
    type: String,
    required: [false]
  },
  mobileNo: {
    type: String,
    required: [false]
  },
  amount: {
    type: Number,
    required: [false]
  },
  pinNo: {
    type: Number,
    required: [false]
  }
});

module.exports = mobileBillPayment = mongoose.model(
  "mobileBillPayment",
  mobileBillPaymentSchema
);
