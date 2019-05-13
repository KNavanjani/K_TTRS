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
import { addMobileBillPayment } from "../actions/mobileBillPaymentActions";

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

  //Add mobile bill payment
  onSubmitAddMobileBillPayment = e => {
    e.preventDefault();
    const newMobilePayment = {
      name: this.state.name,
      email: this.state.email,
      mobileNo: this.state.mobileNo,
      pinNo: this.state.pinNo,
      amount: this.state.amount
    };

    this.props.addMobileBillPayment(newMobilePayment);
    this.setState({
      msg:
        "Thank you for your payment ! You will receive a confirmation email shortly."
    });
  };

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle} href="#">
          Book via Mobile Bill
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
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mobileBillPayment: state.mobileBillPayment
});

export default connect(
  mapStateToProps,
  { addMobileBillPayment }
)(MobileBillPaymentModal);
