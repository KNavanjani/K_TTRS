import React, { Component } from "react";
import { Col } from "reactstrap";
import CreditCardPaymentModal from "./CreditCardPaymentModal";
import MobileBillPaymentModal from "./MobileBillPaymentModal";

//Book a Seat Modal
class BookASeatModal extends Component {
  render() {
    return (
      <div>
        <Col sm={{ size: "auto", offset: 1 }}>
          <CreditCardPaymentModal />
        </Col>
        <br />
        <Col sm={{ size: "auto", offset: 1 }}>
          {" "}
          <MobileBillPaymentModal />
        </Col>
      </div>
    );
  }
}

export default BookASeatModal;
