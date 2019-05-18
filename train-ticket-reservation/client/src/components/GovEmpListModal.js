import React, { Component } from "react";
import { Container, Table } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getGovEmps } from "../actions/govEmpActions";
import PropTypes from "prop-types";

window.govEmpList = [];

//Available GovEmpList Modal
class GovEmpListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: null
    };
  }

  static propTypes = {
    getGovEmps: PropTypes.func.isRequired,
    govEmp: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getGovEmps();
  }

  render() {
    const { govEmps } = this.props.govEmp;

    return (
      <Container>
        {govEmps.map(({ NICNo }) => {
          window.govEmpList = NICNo;
          if (window.govEmpList.includes("884564769V")) console.log("AK");
          // console.log(window.govEmpList);
        })}

        <TransitionGroup className="govEmpList">
          {govEmps.map(({ _id, NICNo }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <Table id="govEmp" responsive>
                <tbody>
                  <tr id="govEmpsList">
                    <td>{NICNo}</td>
                  </tr>
                </tbody>
              </Table>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  govEmp: state.govEmp
});

export default connect(
  mapStateToProps,
  { getGovEmps }
)(GovEmpListModal);
