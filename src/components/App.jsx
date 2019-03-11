import React, { Component } from "react";
import styled from "styled-components";
import Matchup from "./Matchup";
import Team from "./Team";
import { bracket, teams } from "../bracket-team-data";
import "../css/App.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Division = styled.section`
  padding: 1em;
  background: papayawhip;
`;

const Round = styled.section`
  width: 25%;
  float: left;
  padding: 1em;
  background: purple;
`;

class App extends Component {
  state = {
    bracket: {},
    teams: {}
  };

  componentDidMount() {
    this.setState({
      bracket,
      teams
    });
  }

  handleSeedChange = (valueAsNumber, valueAsString, input) => {
    const slug = input.name;

    const teams = { ...this.state.teams };

    teams[slug].seed = valueAsNumber;

    this.setState({
      teams
    });
  };

  determineWinner = (teamA, teamB, bracketPath) => {
    // Change state of matchup to Rutgers as winner,
    // but how do we know where in the state bracket?

    // Need to record the "path" in the state somehow?

    console.log(teamA);
    console.log(teamB);
    console.log(bracketPath);
  };

  render() {
    return (
      <div className="App">
        {/* <div>{JSON.stringify(this.state.teams)}</div> */}
        {Object.keys(this.state.bracket).map(round => (
          <Round>
            {Object.keys(this.state.bracket[round]).map(division => (
              <Division>
                {this.state.bracket[round][division].map(matchup => (
                  <Matchup
                    determineWinner={this.determineWinner}
                    bracketPath={`this.state.bracket.${round}.${division}`}
                  >
                    <Team
                      team={this.state.teams[matchup.teamA]}
                      winner={matchup.winner}
                      handleSeedChange={this.handleSeedChange}
                    />
                    <Team
                      team={this.state.teams[matchup.teamB]}
                      winner={matchup.winner}
                      handleSeedChange={this.handleSeedChange}
                    />
                  </Matchup>
                ))}
              </Division>
            ))}
          </Round>
        ))}
      </div>
    );
  }
}

export default App;
