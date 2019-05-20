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
import { addMobileBillPayment } from "../actions/mobileBillPaymentActions";
import { getGovEmps } from "../actions/govEmpActions";
import PropTypes from "prop-types";

window.govEmpList = [];
window.price = window.stotal;
window.checkNIC = "";
//var status = "NOT Applicable";
var checkedStatus = true;

//Mobile bill payment Modal
class MobileBillPaymentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      email: "",
      amount: 0,
      mobileNo: 785469852,
      pinNo: 1234,
      price: window.stotal,
      isGov: false,
      checked: "Not Applicable",
      msg: null,
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
      document.getElementById("totalCost").value = window.price;
    }
  }

  //Add mobile bill payment
  onSubmitAddMobileBillPayment = e => {
    e.preventDefault();
    const newMobilePayment = {
      name: this.state.name,
      email: this.state.email,
      mobileNo: this.state.mobileNo,
      pinNo: this.state.pinNo,
      amount: window.price
    };

    this.props.addMobileBillPayment(newMobilePayment);
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
            Pay via Mobile Bill
          </Button>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader className="text-muted" toggle={this.toggle}>
              Dialog Mobile Service
            </ModalHeader>
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
                    id="totalCost"
                    value={window.price}
                    className="mb-3"
                    readOnly
                  />
                  <Button color="dark" style={{ marginTop: "2rem" }} block>
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
  mobileBillPayment: state.mobileBillPayment,
  govEmp: state.govEmp
});

export default connect(
  mapStateToProps,
  { addMobileBillPayment, getGovEmps }
)(MobileBillPaymentModal);
