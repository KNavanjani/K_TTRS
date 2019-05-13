import React, { Component } from "react";
import {
  Container,
  ListGroup,
  Table,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardTitle,
  CardText
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getTrains } from "../actions/trainActions";
import BookASeatModal from "./BookASeatModal";
import ShoppingCart from "../images/ShoppingCart.png";
import PropTypes from "prop-types";

//Available TrainList Modal
class AvailableTrainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      noOfTickets: 0,
      amount: 0,
      msg: null
    };

    this.toggle = this.toggle.bind(this);
  }

  static propTypes = {
    getTrains: PropTypes.func.isRequired,
    train: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getTrains();
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { trains } = this.props.train;
    return (
      <Container>
        <ListGroup>
          <Table responsive>
            <thead>
              <tr>
                <h5>
                  <th>Train Number</th>
                  <th>Train Type</th>
                  <th>Class</th>
                  <th>Fare</th>
                  <th>Departure Location</th>
                  <th>Departure Time</th>
                  <th>Arrival Location</th>
                  <th>Arrival Time</th>
                  <th>Facilities</th>
                  <th>Make Payment to Book Seats</th>
                </h5>
              </tr>
            </thead>
          </Table>

          <TransitionGroup className="available-train-list">
            {trains.map(
              ({
                _id,
                facilities,
                trainNo,
                type,
                tclass,
                fare,
                departureLocation,
                departureTime,
                arrivalLocation,
                arrivalTime
              }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <Table id="schedule" responsive>
                    <tbody>
                      <tr>
                        <td>{trainNo}</td>
                        <td>{type}</td>
                        <td>{tclass}</td>
                        <td>{fare}</td>
                        <td>{departureLocation}</td>
                        <td>{departureTime}</td>
                        <td>{arrivalLocation}</td>
                        <td>{arrivalTime}</td>
                        <td>{facilities}</td>
                        <td id="K">
                          <Input
                            type="number"
                            name="noOfTickets"
                            id="noOfTickets"
                            placeholder="Enter Number of Tickets"
                            required
                            className="mb-3"
                            onChange={this.onChange}
                          />
                          <div className="ShoppingCart">
                            <Button
                              id="AddToCart"
                              color="secondary"
                              onClick={this.toggle}
                              href="#"
                            >
                              Add to Cart
                            </Button>
                            <Modal
                              isOpen={this.state.modal}
                              toggle={this.toggle}
                              className={this.props.className}
                            >
                              <ModalHeader
                                className="text-muted"
                                toggle={this.toggle}
                              >
                                Make Your Payment
                              </ModalHeader>
                              <ModalBody>
                                <Card body inverse color="primary">
                                  <CardTitle>
                                    Choose Your Payement Method{" "}
                                  </CardTitle>
                                  <CardText />
                                  <BookASeatModal />
                                </Card>
                              </ModalBody>
                            </Modal>
                            <img
                              src={ShoppingCart}
                              width="50"
                              height="50"
                              alt="cart"
                            />
                            <label id="subTotal">
                              {" "}
                              <strong>{fare * this.state.noOfTickets}</strong>
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  train: state.train
});

export default connect(
  mapStateToProps,
  { getTrains }
)(AvailableTrainList);
