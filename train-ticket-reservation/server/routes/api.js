const express = require("express");
const router = express.Router();
const Ticket = require("../models/tickets");
const Train = require("../models/trains");

//CRUD Operations for Trains
/*
//Get list of trains from the database
router.get('/trains', function (req, res, next) {
  Train.find().then(function (train) {
    res.send(train);
  }).catch(next);
});
*/

/*
//Get list of trains from the database according to user input
router.get('/trains', function (req, res, next) {

  const data = req.query;

  const departureLocation = data.departureLocation;
  const arrivalLocation = data.arrivalLocation;
  const type = data.type;
  const tclass = data.tclass;
  const facilities = data.facilities;



  Train.find(
    {
      $and: [
        { departureLocation: { $eq: departureLocation } },

        { arrivalLocation: { $eq: arrivalLocation } },

        { type: { $eq: type } },

        { tclass: { $eq: tclass } },

        { facilities: { $eq: facilities } },

      ]
    }).then(function (train) {
      res.send(train);
    }).catch(next);
});
*/

//Add a new train to the database
router.post("/trains", function(req, res, next) {
  Train.create(req.body)
    .then(function(train) {
      res.send(train);
    })
    .catch(next);
});

//Update a train of the database
router.put("/trains/:id", function(req, res, next) {
  Train.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Train.findOne({ _id: req.params.id }).then(function(train) {
      res.send(train);
    });
  });
});

//Delete a train from the database
router.delete("/trains/:id", function(req, res, next) {
  Train.findByIdAndRemove({ _id: req.params.id }).then(function(train) {
    res.send(train);
  });
});

//CRUD Operations for Tickets

//Get list of tickets from the database
router.get("/tickets", function(req, res, next) {
  Ticket.find()
    .then(function(ticket) {
      res.send(ticket);
    })
    .catch(next);
});

//Add a new ticket to the database
router.post("/tickets", function(req, res, next) {
  Ticket.create(req.body)
    .then(function(ticket) {
      res.send(ticket);
    })
    .catch(next);
});

//Update a ticket of the database
router.put("/tickets/:id", function(req, res, next) {
  Ticket.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Ticket.findOne({ _id: req.params.id }).then(function(ticket) {
      res.send(ticket);
    });
  });
});

//Delete a ticket from the database
router.delete("/tickets/:id", function(req, res, next) {
  Ticket.findByIdAndRemove({ _id: req.params.id }).then(function(ticket) {
    res.send(ticket);
  });
});

module.exports = router;
