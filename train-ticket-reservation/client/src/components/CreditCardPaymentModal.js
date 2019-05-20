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
  Container
} from "reactstrap";
import { connect } from "react-redux";
import { addCreditCardPayment } from "../actions/creditCardPaymentActions";
import { getGovEmps } from "../actions/govEmpActions";
import PropTypes from "prop-types";

window.govEmpList = [];
window.price = window.stotal;
window.checkNIC = "";
//var status = "NOT Applicable";
var checkedStatus = true;

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
      msg: null,
      nicNumber: "",
      status: "Check Applicability",
      checkedStatus: true
    };

    this.toggle = this.toggle.bind(this);
    this.provideDiscounts = this.provideDiscounts.bind(this);
  }

  static propTypes = {
    getGovEmps: PropTypes.func.isRequired,
    govEmp: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getGovEmps();
    window.price = window.stotal;
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

  validateGovEmpStatus = e => {
    var EntertedNICNumber = document.getElementById("nicNo").value;
    //console.log(EntertedNICNumber);
    this.setState({ nicNumber: EntertedNICNumber }, () => {
      window.checkNIC = this.state.nicNumber;
      console.log(window.checkNIC);
    });
    document.getElementById("checkApplicability").disabled = true;
  };

  //Provide discounts
  provideDiscounts() {
    if (checkedStatus === true) {
      var precentage = 3.0;
      window.price = window.stotal - (window.stotal * precentage) / 100;
      console.log(window.price);
      console.log(window.stotal);
      document.getElementById("totalCost").value = window.price;
    }
  }

  //Add credit card payment
  onSubmitAddCreditCardPayment = e => {
    e.preventDefault();
    const newCreditCardPayment = {
      name: this.state.name,
      email: this.state.email,
      cardNo: this.state.cardNo,
      cvcNo: this.state.cvcNo,
      amount: window.price
    };

    this.props.addCreditCardPayment(newCreditCardPayment);
    this.setState({
      msg:
        "Thank you for your payment ! You will receive a confirmation email shortly."
    });
  };

  render() {
    const { govEmps } = this.props.govEmp;
    return (
      <Container>
        <div>
          <Button color="secondary" onClick={this.toggle} href="#">
            Pay via Credit Card
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
                  <Label id="nicNumber" for="nic" className="text-muted">
                    Government employes can obtain discounts
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="nicNo"
                    maxlength="10"
                    placeholder="Enter Your NIC to Verify Government Employee Status"
                    className="mb-3"
                    onChange={this.onChange}
                  />
                  {govEmps.map(({ NICNo }) =>
                    NICNo === this.state.nicNumber ? (
                      // (status = "APPLICABLE")
                      <Button
                        id="getDiscount"
                        color="success"
                        onClick={this.provideDiscounts}
                      >
                        Get Discount
                      </Button>
                    ) : (
                      checkedStatus === false
                    )
                  )}

                  <br />
                  <Button
                    color="primary"
                    id="checkApplicability"
                    onClick={this.validateGovEmpStatus}
                  >
                    Verify Government Employee Status
                  </Button>
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
                    type="text"
                    name="amount"
                    id="totalCost"
                    className="mb-3"
                    value={window.price}
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
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  creditCardPayment: state.creditCardPayment,
  govEmp: state.govEmp
});

export default connect(
  mapStateToProps,
  { addCreditCardPayment, getGovEmps }
)(CreditCardPaymentModal);
