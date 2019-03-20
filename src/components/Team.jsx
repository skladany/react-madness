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

const SeedWrapper = styled.div`
  display: inline-block;
  padding: 2px 5px;
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

  handleNumericClick = e => {
    e.stopPropagation();
    console.log("handleNumericClick");
  };

  handlePickWinner = e => {
    console.log("handlePickWinner");

    const { team, round, division, matchId, winner } = this.props;
    console.log("Round", round);

    if (round > 1) {
      console.log("do nothing");
      return false;
    } else if (round == 1) {
      this.props.unPickWinner({
        team,
        round,
        division,
        matchId,
        winner: false
      });
    } else if (round == 0) {
      this.props.pickWinner({
        team,
        round,
        division,
        matchId,
        winner: this.props.team.slug
      });
    }
  };

  render() {
    const teamStatus = this.props.winner
      ? this.props.winner === this.props.team.slug
        ? "winner"
        : "loser"
      : "No Winner";

    const teamName = this.props.team ? `${this.props.team.name}` : "Undecided";

    const teamSeed = this.props.team ? (
      this.props.round == 0 && !this.props.winner ? (
        <SeedWrapper onClick={this.handleNumericClick}>
          <NumericInput
            min={1}
            max={64}
            name={this.props.team.slug}
            value={this.props.team.seed}
            onChange={this.props.handleSeedChange}
          />
        </SeedWrapper>
      ) : (
        <div>{this.props.team.seed}</div>
      )
    ) : (
      ""
    );

    return (
      <TeamDiv className={teamStatus} onClick={this.handlePickWinner}>
        {teamName}
        {teamSeed}
      </TeamDiv>
    );
  }
}

export default Team;
