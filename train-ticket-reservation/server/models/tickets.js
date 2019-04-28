const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create ticket Schema & model
const TicketScehma = new Schema({

    title: {
        type: String,
        required: [false]
    },

    name: {
        type: String,
        required: [true, 'Please fill the Name']
    },
    mobile: {
        type: Number,
        required: [true, 'Please fill the Mobile Number']
    },
    email: {
        type: String,
        required: [true, 'Please fill the Email address']
    },
    destination: {
        type: String,
        required: [true, 'Please fill the Destination Location']
    },
    date: {
        type: String,
        required: [true, 'Please fill the Trip Date']

    },
    time: {
        type: String,
        required: [true, 'Please fill the Train Time']
    },
    trainNo: {
        type: String,
        required: [true, 'Please fill the Train Number']
    },
    NoOfSeats: {
        type: Number,
        required: [true, 'Please fill the Number of Seats Required']
    },
    TransactionID: {
        type: String,
        required: [true, 'Please fill the Transaction ID']
    },
    NIC: {
        type: String,
        required: [true, 'Please fill the NIC Number']
    }

});

const Ticket = mongoose.model('ticket', TicketScehma);

module.exports = Ticket;
