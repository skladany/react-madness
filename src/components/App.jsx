import React, { Component } from "react";
import styled from "styled-components";
import Matchup from "./Matchup";
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

    const pathArr = bracketPath.split(".");

    console.log(pathArr);

    // Arbitrary set state of teamA to "win"
    const bracket = { ...this.state.bracket };

    // const test = eval(`bracket["roundOne"]["topLeft"]`);

    console.log(bracket[2].winner);

    //bracket[`roundOne][topLeft`].winner = "rutgers";
  };

  render() {
    //console.log(typeof this.state.bracket[2].winner);

    return (
      <div className="App">
        <h2>TopLeft</h2>

        {Object.keys(this.state.bracket).map(round => console.log(round))}

        {/* {Object.keys(this.state.bracket).map(round => (
          <Round>
            {Object.keys(this.state.bracket[round]).map(division => (
              <Division>
                {this.state.bracket[round][division].map(matchup => (
                  <Matchup
                    determineWinner={this.determineWinner}
                    bracketPath={`${round}.${division}`}
                    teamA={this.state.teams[matchup.teamA]}
                    teamB={this.state.teams[matchup.teamB]}
                    winner={matchup.winner}
                  />
                ))}
              </Division>
            ))}
          </Round>
        ))} */}
      </div>
    );
  }
}

export default App;
