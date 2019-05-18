import React from "react";
import { Card, CardImg, CardTitle, CardText } from "reactstrap";
import coverimg from "../images/coverimg.png";

//Home page contents Modal
const HomePageContents = props => {
  return (
    <div>
      <Card body inverse color="info" className="text-center">
        <strong>
          <CardTitle tag="h2" className="text-white">
            Reserve Train Tickets
          </CardTitle>
        </strong>

        <CardText tag="h4" className="text-white">
          Reserve train tickets with convenience and ease any time any were with{" "}
          <strong>TravelLight.</strong>
          <CardImg top width="100%" src={coverimg} alt="Card image cap" />
          <br /> <br />
          <div>
            <u>
              <strong>Guidelines</strong>
            </u>

            <br />
            <li>
              Change the ticket quantity as required -> Double Click on
              displayed price for Add to Cart -> Click on "Make Payment" button
              next to the train you wish to book
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
          <u>
            <strong>Terms and Conditions</strong>
          </u>
          <br />
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
