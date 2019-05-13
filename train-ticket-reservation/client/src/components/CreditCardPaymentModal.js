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
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import { addCreditCardPayment } from "../actions/creditCardPaymentActions";

//Credit card payment Modal
class CreditCardPaymentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      email: "",
      cardNo: 1245874596,
      cvcNo: 123,
      amount: 0,
      msg: null
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //Add credit card payment
  onSubmitAddCreditCardPayment = e => {
    e.preventDefault();
    const newCreditCardPayment = {
      name: this.state.name,
      email: this.state.email,
      cardNo: this.state.cardNo,
      cvcNo: this.state.cvcNo,
      amount: this.state.amount
    };

    this.props.addCreditCardPayment(newCreditCardPayment);
    this.setState({
      msg:
        "Thank you for your payment ! You will receive a confirmation email shortly."
    });
  };

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle} href="#">
          Book via Credit Card
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
                  Credit Card Number
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
                  placeholder="Sub Total"
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
  { addCreditCardPayment }
)(CreditCardPaymentModal);
