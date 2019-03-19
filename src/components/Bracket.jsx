import React, { Component } from "react";
import styled from "styled-components";
import Matchup from "./Matchup";
import Team from "./Team";

const Division = styled.section`
  display: block;
  padding: 1em;
  background: purple;
  clear: both;
`;

const Round = styled.section`
  width: 20%;
  float: left;
  padding: 1em;
  background: papayawhip;
`;

class Bracket extends React.Component {
  render() {
    return (
      <>
        {Object.keys(this.props.bracket).map((division, d) => (
          <Division key={d}>
            {Object.keys(this.props.bracket[division]).map((round, r) => (
              <Round key={r}>
                {this.props.bracket[division][round].map((matchup, m) => (
                  <Matchup
                    determineWinner={this.props.determineWinner}
                    round={round}
                    division={division}
                    matchId={m}
                    key={m}
                  >
                    <Team
                      pickWinner={this.props.pickWinner}
                      team={this.props.teams[matchup.teamA]}
                      round={round}
                      division={division}
                      matchId={m}
                      winner={matchup.winner}
                      handleSeedChange={this.props.handleSeedChange}
                    />
                    <Team
                      pickWinner={this.props.pickWinner}
                      team={this.props.teams[matchup.teamB]}
                      round={round}
                      division={division}
                      matchId={m}
                      winner={matchup.winner}
                      handleSeedChange={this.props.handleSeedChange}
                    />
                  </Matchup>
                ))}
              </Round>
            ))}
          </Division>
        ))}
      </>
    );
  }
}

export default Bracket;
