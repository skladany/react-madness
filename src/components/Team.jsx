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
      this.props.round == 0 ? (
        <NumericInput
          min={1}
          max={64}
          name={this.props.team.slug}
          value={this.props.team.seed}
          onChange={this.props.handleSeedChange}
        />
      ) : (
        <div>{this.props.team.seed}</div>
      )
    ) : (
      ""
    );

    return (
      <TeamDiv className={teamStatus}>
        {teamName}
        {teamSeed}
      </TeamDiv>
    );
  }
}

export default Team;
