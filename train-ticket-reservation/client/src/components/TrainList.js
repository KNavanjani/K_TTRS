import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class TrainList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { tickets } = this.props.ticket;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="train-list">
            {tickets.map(
              ({
                _id,
                title,
                name,
                mobile,
                email,
                destination,
                date,
                time,
                trainNo,
                NoOfSeats,
                TransactionID,
                NIC
              }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem className="text-muted">
                    {this.props.isAuthenticated ? (
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times;
                      </Button>
                    ) : null}

                    {`Use this Booking Reference ID when required to Update Ticket Details:  ${_id}`}
                  </ListGroupItem>
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
  ticket: state.ticket,
  isAuthenticated: state.auth
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(TrainList);
