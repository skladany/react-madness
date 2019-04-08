import React, { Component } from "react";
import Division from "../styles/Division.js";
import Round from "../styles/Round.js";
import Matchup from "./Matchup";
import Team from "./Team";

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
                      unPickWinner={this.props.unPickWinner}
                      team={this.props.teams[matchup.teamA]}
                      round={round}
                      division={division}
                      matchId={m}
                      winner={matchup.winner}
                      handleSeedChange={this.props.handleSeedChange}
                    />
                    <Team
                      pickWinner={this.props.pickWinner}
                      unPickWinner={this.props.unPickWinner}
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
