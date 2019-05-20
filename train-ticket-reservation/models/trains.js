const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create train Schema & model
const TrainScehma = new Schema({
  trainNo: {
    type: String,
    required: [false]
  },

  type: {
    type: String,
    required: [false]
  },
  tclass: {
    type: String,
    required: [false]
  },
  facilities: {
    type: String,
    default: "Non A/C"
  },
  fare: {
    type: Number,
    required: [false]
  },
  departureLocation: {
    type: String,
    required: [false]
  },
  departureTime: {
    type: String,
    required: [false]
  },
  arrivalLocation: {
    type: String,
    required: [false]
  },
  arrivalTime: {
    type: String,
    required: [false]
  }
});

const Train = mongoose.model("train", TrainScehma);

module.exports = Train;
