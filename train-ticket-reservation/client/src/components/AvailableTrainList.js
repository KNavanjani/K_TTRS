import React, { Component } from "react";
import { Container, ListGroup, Table } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getTrains } from "../actions/trainActions";
import BookASeatModal from "./BookASeatModal";
import PropTypes from "prop-types";

class AvailableTrainList extends Component {
  static propTypes = {
    getTrains: PropTypes.func.isRequired,
    train: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getTrains();
  }

  render() {
    const { trains } = this.props.train;
    return (
      <Container>
        <ListGroup>
          <Table responsive>
            <thead>
              <tr>
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
                  <Table responsive>
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
                        <td>
                          <BookASeatModal />
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
