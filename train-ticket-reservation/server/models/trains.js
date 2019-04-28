const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create train Schema & model
const TrainScehma = new Schema({
  trainNo: {
    type: String,
    required: [true, "Please fill the Train No"]
  },

  type: {
    type: String,
    required: [true, "Please fill the Train Type"]
  },
  tclass: {
    type: String,
    required: [true, "Please fill the Train Class"]
  },
  facilities: {
    type: String,
    required: [true, "Please Specify A/C or Non A/C"]
  },
  fare: {
    type: Number,
    required: [true, "Please fill the Fare"]
  },
  departureLocation: {
    type: String,
    required: [true, "Please fill the Destination Location"]
  },
  departureTime: {
    type: String,
    required: [true, "Please fill the Destination Time"]
  },
  arrivalLocation: {
    type: String,
    required: [true, "Please fill the Arrival Location"]
  },
  arrivalTime: {
    type: String,
    required: [true, "Please fill the Arrival Time"]
  }
});

const Train = mongoose.model("train", TrainScehma);

module.exports = Train;
