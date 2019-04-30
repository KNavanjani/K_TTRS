import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  ModalFooter
} from "reactstrap";

import { connect } from "react-redux";
import { addCreditCardPayment } from "../actions/creditCardPaymentActions";
import { addMobileBillPayment } from "../actions/mobileBillPaymentActions";

class BookASeatModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      name: "",
      email: "",
      cardNo: 1245874596,
      cvcNo: 123,
      amount: 0,
      mobileNo: 785469852,
      pinNo: 1234,
      msg: null
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitAddCreditCardPayment = e => {
    e.preventDefault();
    const newCreditCardPayment = {
      name: this.state.name,
      email: this.state.email,
      cardNo: this.state.cardNo,
      cvcNo: this.state.cvcNo,
      amount: this.state.amount
    };
    //Add item via add item action

    this.props.addCreditCardPayment(newCreditCardPayment);
    this.setState({
      msg:
        "Thank you for your payment ! You will receive a confirmation email shortly."
    });

    //Close Modal
    //this.toggle();
  };

  onSubmitAddMobileBillPayment = e => {
    e.preventDefault();
    const newMobilePayment = {
      name: this.state.name,
      email: this.state.email,
      mobileNo: this.state.mobileNo,
      pinNo: this.state.pinNo,
      amount: this.state.amount
    };
    //Add item via add item action

    this.props.addMobileBillPayment(newMobilePayment);
    this.setState({
      msg:
        "Thank you for your payment ! You will receive a confirmation email shortly."
    });

    //Close Modal
    // this.toggle();
  };

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle} href="#">
          Book Now
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="text-muted" toggle={this.toggle}>
            Sampath Bank Payments
          </ModalHeader>
          <ModalBody>
            <ModalBody>
              <Form action="send" onSubmit={this.onSubmitAddCreditCardPayment}>
                <FormGroup>
                  {this.state.msg ? (
                    <Alert color="success">{this.state.msg}</Alert>
                  ) : null}
                  <Label for="nic" className="text-muted">
                    Government employes can obtain discounts
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your NIC to Verify Government Employee Status"
                    className="mb-3"
                    onChange={this.onChange}
                  />

                  <Button color="success">Validate</Button>
                  <br />
                  <Label for="name" className="text-muted">
                    Name
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="mb-3"
                    onChange={this.onChange}
                  />

                  <Label for="email" className="text-muted">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="mb-3"
                    onChange={this.onChange}
                  />

                  <Label for="cardNo" className="text-muted">
                    Credi Card Number
                  </Label>
                  <Input
                    type="text"
                    name="cardNo"
                    id="cardNo"
                    maxlength="16"
                    pattern="\d{16}"
                    placeholder="Enter Your Credit Card Number"
                    className="mb-3"
                    onChange={this.onChange}
                  />
                  <Label for="cvcNo" className="text-muted">
                    Credit Card CVC Number
                  </Label>
                  <Input
                    type="text"
                    name="cvcNo"
                    id="cvcNo"
                    placeholder="XXX"
                    maxlength="3"
                    pattern="\d{3}"
                    required
                    className="mb-3"
                    onChange={this.onChange}
                  />

                  <Label for="amount" className="text-muted">
                    Amount
                  </Label>
                  <Input
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="Enter the Sub Total"
                    className="mb-3"
                    onChange={this.onChange}
                  />

                  <Button
                    type="submit"
                    color="dark"
                    style={{ marginTop: "2rem" }}
                    block
                  >
                    Make the Payment
                  </Button>
                </FormGroup>
              </Form>
            </ModalBody>

            <Button color="primary" onClick={this.toggleNested}>
              Click here to Pay via Dialog Mobile Service
            </Button>
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader className="text-muted">
                Dialog Mobile Service
              </ModalHeader>
              <ModalBody>
                <ModalBody>
                  <Form onSubmit={this.onSubmitAddMobileBillPayment}>
                    <FormGroup>
                      {this.state.msg ? (
                        <Alert color="success">{this.state.msg}</Alert>
                      ) : null}
                      <Label for="nic" className="text-muted">
                        Government employes can obtain discounts
                      </Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your NIC to Verify Government Employee Status"
                        className="mb-3"
                        onChange={this.onChange}
                      />

                      <Button color="success">Validate</Button>
                      <br />
                      <Label for="name" className="text-muted">
                        Name
                      </Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="mb-3"
                        onChange={this.onChange}
                      />

                      <Label for="email" className="text-muted">
                        Email
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="mb-3"
                        onChange={this.onChange}
                      />

                      <Label for="mobileNo" className="text-muted">
                        Mobile Number
                      </Label>
                      <Input
                        type="text"
                        name="mobileNo"
                        id="mobileNo"
                        maxlength="10"
                        pattern="\d{10}"
                        placeholder="Enter Your Mobile Number"
                        className="mb-3"
                        onChange={this.onChange}
                      />
                      <Label for="cvcNo" className="text-muted">
                        PIN Number
                      </Label>
                      <Input
                        type="text"
                        name="pinNo"
                        id="pinNo"
                        maxlength="4"
                        pattern="\d{4}"
                        placeholder="XXXX"
                        className="mb-3"
                        onChange={this.onChange}
                      />
                      <Label for="amount" className="text-muted">
                        Amount
                      </Label>
                      <Input
                        type="number"
                        name="amount"
                        id="amount"
                        placeholder="Enter the Sub Total"
                        className="mb-3"
                        onChange={this.onChange}
                      />

                      <Button color="dark" style={{ marginTop: "2rem" }} block>
                        Make the Payment
                      </Button>
                    </FormGroup>
                  </Form>
                </ModalBody>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggleNested}>
                  Back
                </Button>{" "}
                <Button color="secondary" onClick={this.toggleAll}>
                  Close All
                </Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  creditCardPayment: state.creditCardPayment
});

export default connect(
  mapStateToProps,
  { addCreditCardPayment, addMobileBillPayment }
)(BookASeatModal);
