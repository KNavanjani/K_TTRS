const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//Ticket Model
const Ticket = require("../../models/tickets");

//Get list of tickets from the database
router.get("/", (req, res) => {
  Ticket.find().then(tickets => res.json(tickets));
});

//Add a new ticket to the database
router.post("/", auth, (req, res) => {
  const newTicket = new Ticket({
    title: req.body.title,
    name: req.body.name,
    mobile: req.body.mobile,
    email: req.body.email,
    destination: req.body.destination,
    date: req.body.date,
    time: req.body.time,
    trainNo: req.body.trainNo,
    NoOfSeats: req.body.NoOfSeats,
    TransactionID: req.body.TransactionID,
    NIC: req.body.NIC
  });

  newTicket.save().then(ticket => res.json(ticket));
});

//Delete a ticket from the database
router.delete("/:id", auth, (req, res) => {
  Ticket.findById(req.params.id)
    .then(ticket => ticket.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//Update a ticket of the database
router.put("/:id", function(req, res, next) {
  Ticket.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Ticket.findOne({ _id: req.params.id }).then(function(ticket) {
      res.send(ticket);
    });
  });
});

module.exports = router;
