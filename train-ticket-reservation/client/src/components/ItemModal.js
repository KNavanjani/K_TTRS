import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Badge,
  Input
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    title: "",
    name: "",
    mobile: 789658423,
    email: "",
    destination: "",
    date: "",
    time: "",
    trainNo: "",
    NoOfSeats: 1,
    TransactionID: "",
    NIC: ""
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      //[e.target.title]: e.target.value,
      [e.target.name]: e.target.value
      /*
      [e.target.mobile]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.destination]: e.target.value,
      [e.target.date]: e.target.value,
      [e.target.time]: e.target.value,
      [e.target.trainNo]: e.target.value,
      [e.target.NoOfSeats]: e.target.value,
      [e.target.TransactionID]: e.target.value,
      [e.target.NIC]: e.target.value
      */
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      title: this.state.title,
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email,
      destination: this.state.destination,
      date: this.state.date,
      time: this.state.time,
      trainNo: this.state.trainNo,
      NoOfSeats: this.state.NoOfSeats,
      TransactionID: this.state.TransactionID,
      NIC: this.state.NIC
    };
    //Add item via add item action
    this.props.addItem(newItem);
    //Close Modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={this.toggle}
          >
            Book Train Tickets
          </Button>
        ) : (
          <h2>
            {" "}
            <Badge color="info">Please Login to Book a Train Ticket</Badge>
          </h2>
        )}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="text-muted" toggle={this.toggle}>
            Book Sri Lankan Train Tickets
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="title" className="text-muted">
                  Title
                </Label>
                <Input
                  type="text"
                  name="title"
                  id="ticket"
                  placeholder="Enter Title"
                  onChange={this.onChange}
                />
                <Label for="name" className="text-muted">
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="ticket"
                  placeholder="Enter Name"
                  onChange={this.onChange}
                />
                <Label for="mobile" className="text-muted">
                  Mobile
                </Label>
                <Input
                  type="text"
                  name="mobile"
                  id="ticket"
                  placeholder="Enter Mobile"
                  onChange={this.onChange}
                />
                <Label for="destination" className="text-muted">
                  Destination
                </Label>
                <Input
                  type="text"
                  name="destination"
                  id="ticket"
                  placeholder="Enter Destination"
                  onChange={this.onChange}
                />
                <Label for="date" className="text-muted">
                  Date
                </Label>
                <Input
                  type="text"
                  name="date"
                  id="ticket"
                  placeholder="Enter Trip Date"
                  onChange={this.onChange}
                />
                <Label for="time" className="text-muted">
                  Time
                </Label>
                <Input
                  type="text"
                  name="time"
                  id="ticket"
                  placeholder="Enter Train Time"
                  onChange={this.onChange}
                />
                <Label for="trainNo" className="text-muted">
                  Train Number
                </Label>
                <Input
                  type="text"
                  name="trainNo"
                  id="ticket"
                  placeholder="Enter Train Number"
                  onChange={this.onChange}
                />
                <Label for="NoOfSeats" className="text-muted">
                  No Of Seats
                </Label>
                <Input
                  type="text"
                  name="NoOfSeats"
                  id="ticket"
                  placeholder="Enter Required Number of Seats"
                  onChange={this.onChange}
                />
                <Label for="transactionID" className="text-muted">
                  Transaction ID
                </Label>
                <Input
                  type="text"
                  name="transactionID"
                  id="ticket"
                  placeholder="Enter Transaction ID"
                  onChange={this.onChange}
                />
                <Label for="NIC" className="text-muted">
                  NIC
                </Label>
                <Input
                  type="text"
                  name="NIC"
                  id="ticket"
                  placeholder="Enter NIC"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Book Ticket
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
