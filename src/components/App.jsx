import React, { Component } from "react";
import styled from "styled-components";
import Bracket from "./Bracket";
import { bracket, teams } from "../bracket-team-data";
import "../css/App.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component {
  state = {
    bracket,
    teams,
    matchId: 4
  };

  // componentDidMount() {
  //   this.setState({
  //     bracket,
  //     teams,
  //     matchId: 4
  //   });
  // }

  handleSeedChange = (valueAsNumber, valueAsString, input) => {
    const slug = input.name;

    const teams = { ...this.state.teams };

    teams[slug].seed = valueAsNumber;

    this.setState({
      teams
    });
  };

  determineWinner = (teamA, teamB, round, division, matchId) => {
    // State is updating, but not getting passed down to round 2 as it should

    // Arbitrary set state of teamA to "win"
    let bracket = { ...this.state.bracket };

    bracket[division][round][matchId].winner = teamA.slug;

    // Set up next match as well
    const nextRound = parseInt(round) + 1;
    const nextMatchId = Math.floor(matchId / 2);
    const teamLocation = matchId % 2 ? "teamB" : "teamA";

    // For now, always pick the "top" team, eventually will be random
    const winningTeamSlug = teamA.slug;
    // const winningTeamSlug = matchId % 2 ? teamB.slug : teamA.slug;

    bracket[division][nextRound][nextMatchId][teamLocation] = winningTeamSlug;

    this.setState({
      bracket
    });
  };

  render() {
    return (
      <div className="App">
        {/* <div>{JSON.stringify(this.state.bracket)}</div> */}
        <Bracket
          bracket={this.state.bracket}
          teams={this.state.teams}
          handleSeedChange={this.handleSeedChange}
          determineWinner={this.determineWinner}
        />
      </div>
    );
  }
}

export default App;
