const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create train Schema & model
const TrainScehma = new Schema({
  trainNo: {
    type: String,
    //required: [true, 'Please fill the Train No']
    required: [false]
  },

  type: {
    type: String,
    //required: [true, 'Please fill the Train Type']
    required: [false]
  },
  tclass: {
    type: String,
    //required: [true, 'Please fill the Train Class']
    required: [false]
  },
  facilities: {
    type: String,
    default: "Non A/C"
  },
  fare: {
    type: Number,
    //required: [true, 'Please fill the Fare']
    required: [false]
  },
  departureLocation: {
    type: String,
    //required: [true, 'Please fill the Destination Location']
    required: [false]
  },
  departureTime: {
    type: String,
    //required: [true, 'Please fill the Destination Time']
    required: [false]
  },
  arrivalLocation: {
    type: String,
    //required: [true, 'Please fill the Arrival Location']
    required: [false]
  },
  arrivalTime: {
    type: String,
    //required: [true, 'Please fill the Arrival Time']
    required: [false]
  }
});

const Train = mongoose.model("train", TrainScehma);

module.exports = Train;
