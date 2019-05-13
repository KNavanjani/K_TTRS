const express = require("express");
const router = express.Router();

//Train Model
const Train = require("../../models/trains");

//Get list of trains from the database
router.get("/", (req, res) => {
  Train.find().then(trains => res.json(trains));
});

//Add a new train to the database
router.post("/", (req, res, next) => {
  const newTrain = new Train({
    trainNo: req.body.trainNo,
    type: req.body.type,
    class: req.body.class,
    facilities: req.body.facilities,
    fare: req.body.fare,
    arrivaLocation: req.body.arrivaLocation,
    arrivalTime: req.body.arrivalTime,
    destinationLocation: req.body.destinationLocation,
    destinationTime: req.body.destinationTime
  });

  newTrain
    .save()
    .then(train => res.json(train))
    .catch(next);
});

//Delete a train from the database
router.delete("/:id", (req, res) => {
  Train.findById(req.params.id)
    .then(train => train.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//Update a train of the database
router.put("/:id", function(req, res, next) {
  Train.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Train.findOne({ _id: req.params.id })
      .then(function(train) {
        res.send(train);
      })
      .catch(next);
  });
});

module.exports = router;
