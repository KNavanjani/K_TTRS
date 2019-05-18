const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create govEmps Schema & model
const GovEmpScehma = new Schema({
  NICNo: {
    type: String,
    required: [false]
  }
});

const GovEmp = mongoose.model("govEmp", GovEmpScehma);

module.exports = GovEmp;
