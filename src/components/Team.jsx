import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";
import NumericInput from "react-numeric-input";
import { numericInputStyles } from "../styles/numeric-input-styles";
import {
  secondaryColor,
  loserColor,
  winnerColor
} from "../styles/color-scheme";

const TeamDiv = styled.div`
  padding: 4px;
  margin: 4px;
  border: 2px solid ${secondaryColor};

  &.winner {
    background-color: ${winnerColor};
  }

  &.loser {
    background-color: ${loserColor};
  }
`;

const TeamName = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
  display: inline-block;
  padding: 0 8px;
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
  };

  handlePickWinner = e => {
    const { team, round, division, matchId, winner } = this.props;

    if (round > 1) {
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
    const teamStatus = this.props.team
      ? this.props.winner
        ? this.props.winner === this.props.team.slug
          ? "winner"
          : "loser"
        : ""
      : "";

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
            style={numericInputStyles}
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
        <TeamName>{teamName}</TeamName>
        {teamSeed}
      </TeamDiv>
    );
  }
}

export default Team;
