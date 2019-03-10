import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";
import NumericInput from "react-numeric-input";

const TeamDiv = styled.div`
  padding: 12px;
  border: 1px solid red;

  &.winner {
    background-color: green;
  }

  &.loser {
    background-color: red;
  }
`;

class Team extends React.Component {
  // static propTypes = {
  //   details: PropTypes.shape({
  //     image: PropTypes.string,
  //     name: PropTypes.string,
  //     desc: PropTypes.string,
  //     status: PropTypes.string,
  //     price: PropTypes.number
  //   }),
  //   addToOrder: PropTypes.func
  // };

  handleChange = event => {
    console.log("changed");
    console.log(event);
  };

  render() {
    const teamStatus = this.props.winner
      ? this.props.winner === this.props.team.slug
        ? "winner"
        : "loser"
      : "No Winner";

    const teamName = this.props.team ? `${this.props.team.name}` : "Undecided";

    const teamSeed = this.props.team ? (
      <NumericInput
        min={0}
        max={100}
        value={50}
        name={this.props.team.slug}
        value={this.props.team.seed}
        onChange={this.props.handleSeedChange}
      />
    ) : (
      ""
    );

    return (
      <TeamDiv className={teamStatus}>
        {teamName} {teamStatus}
        {teamSeed}
      </TeamDiv>
    );
  }
}

export default Team;
