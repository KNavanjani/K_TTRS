import React from "react";
import { Card, CardImg, CardTitle, CardText } from "reactstrap";
import coverimg from "../images/coverimg.png";

//Home page contents Modal
const HomePageContents = props => {
  return (
    <div>
      <Card body inverse color="info" className="text-center">
        <h2>
          <strong>
            <CardTitle className="text-white">Reserve Train Tickets</CardTitle>
          </strong>
        </h2>
        <CardText className="text-white">
          <h4>
            Reserve train tickets with convenience and ease any time any were
            with <strong>TravelLight.</strong>
          </h4>
          <CardImg top width="100%" src={coverimg} alt="Card image cap" />
          <br /> <br />
          <div>
            <h3>Guidelines</h3>
            <li>
              Click on "Add to Cart" button next to the train you wish to book
              and change the ticket quantity as required.
            </li>
            <li>
              Complete the payment process either by credit card or mobile bill
              payments to obtain a transaction ID via email.
            </li>
            <li>
              Create an FREE account in TravelLight and login with created
              credentials.
            </li>

            <li>Complete the booking form and submit.</li>
          </div>
          <br /> <br />
          <h3>Terms and Conditions</h3>
          <li>No cancellation and no refund policy apply. </li>
          <li> Maximum of 5 Tickets would be reserved per one NIC. </li>
          <li>
            Standard customer verification and other terms and conditions would
            apply.
          </li>
        </CardText>
      </Card>
    </div>
  );
};

export default HomePageContents;
