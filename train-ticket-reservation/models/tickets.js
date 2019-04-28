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
    //required: [true, 'Please fill the Name']
    required: [false]
  },
  mobile: {
    type: Number,
    //required: [true, 'Please fill the Mobile Number']
    required: [false]
  },
  email: {
    type: String,
    //required: [true, 'Please fill the Email address']
    required: [false]
  },
  destination: {
    type: String,
    //required: [true, 'Please fill the Destination Location']
    required: [false]
  },
  date: {
    type: String,
    //required: [true, 'Please fill the Trip Date']
    required: [false]
  },
  time: {
    type: String,
    //required: [true, 'Please fill the Train Time']
    required: [false]
  },
  trainNo: {
    type: String,
    //required: [true, 'Please fill the Train Number']
    required: [false]
  },
  NoOfSeats: {
    type: Number,
    //required: [true, 'Please fill the Number of Seats Required']
    required: [false]
  },
  TransactionID: {
    type: String,
    //required: [true, 'Please fill the Transaction ID']
    required: [false]
  },
  NIC: {
    type: String,
    //required: [true, 'Please fill the NIC Number']
    required: [false]
  }
});

const Ticket = mongoose.model("ticket", TicketScehma);

module.exports = Ticket;
