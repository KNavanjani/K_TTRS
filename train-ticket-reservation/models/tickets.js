const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create ticket Schema & model
const TicketScehma = new Schema({
  title: {
    type: String,
    required: [false]
  },

  name: {
    type: String,
    required: [false]
  },
  mobile: {
    type: Number,
    required: [false]
  },
  email: {
    type: String,
    required: [false]
  },
  destination: {
    type: String,
    required: [false]
  },
  date: {
    type: String,
    required: [false]
  },
  time: {
    type: String,
    required: [false]
  },
  trainNo: {
    type: String,
    required: [false]
  },
  NoOfSeats: {
    type: Number,
    required: [false]
  },
  TransactionID: {
    type: String,
    required: [false]
  },
  NIC: {
    type: String,
    required: [false]
  }
});

const Ticket = mongoose.model("ticket", TicketScehma);

module.exports = Ticket;
