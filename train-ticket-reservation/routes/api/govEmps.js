const express = require("express");
const router = express.Router();

//GovEmp Model
const GovEmp = require("../../models/govEmps");

//Get list of GovEmps from the database
router.get("/", (req, res) => {
  GovEmp.find().then(govEmps => res.json(govEmps));
});

//Add a new govEmp to the database
router.post("/", (req, res, next) => {
  const newGovEmp = new GovEmp({
    NICNo: req.body.NICNo
  });

  newGovEmp
    .save()
    .then(govEmp => res.json(govEmp))
    .catch(next);
});

//Delete a govEmp from the database
router.delete("/:id", (req, res) => {
  GovEmp.findById(req.params.id)
    .then(govEmp => govEmp.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
