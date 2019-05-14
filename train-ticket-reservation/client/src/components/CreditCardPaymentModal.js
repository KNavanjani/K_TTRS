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

window.price = 0;

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
      price: window.stotal,
      isGov: false,
      checked: "Not Applicable",
      msg: null
    };

    this.toggle = this.toggle.bind(this);
    this.validateGovEmp = this.validateGovEmp.bind(this);
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

  //Validate Government Employee Status and provide discounts
  validateGovEmp() {
    this.setState(
      prevState => ({
        isGov: !prevState.isGov
      }),
      () => {
        if (this.state.isGov === true) {
          this.setState(
            { checked: "Applicable, Click validate to obtain discount" },
            function() {
              var precentage = 10.0;
              window.price = (window.stotal * precentage) / 100;
              // console.log("Discount Applicable");
              // console.log(window.price);
            }
          );
        }
        //else {
        // window.price = window.stotal;
        //console.log("Discount Not Applicable");
        //console.log(window.price);
        //}
      }
    );
  }
  /*
  this.setState({
    buttonOne:'ONE'
  }, () => console.log(this.state.buttonOne, 'this.state.buttonOne'))

*/

  //var precentage = 10.0;
  // if (this.state.checked === "Applicable") {
  // window.stotal = (window.stotal * precentage) / 100;
  //  console.log("KK4K");
  // } else window.stotal = window.stotal;
  // console.log("KK2K");
  // console.log(window.stotal);

  /*
  //Provide Discounts
  getDiscounts() {
    var precentage = 10.0;
    if (this.state.checked === "Applicable") {
      window.stotal = (window.stotal * precentage) / 100;
      console.log("KKK");
    } else window.stotal = window.stotal;
  }
*/
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
                <Button color="success" onClick={this.validateGovEmp}>
                  Validate
                </Button>{" "}
                <Label
                  for="name"
                  className="text-success"
                  onChange={this.getDiscounts}
                >
                  {" "}
                  {this.state.checked}
                </Label>
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
                  value={window.price}
                  className="mb-3"
                  readOnly
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
