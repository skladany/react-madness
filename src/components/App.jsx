import React, { Component } from "react";
import styled from "styled-components";
import Matchup from "./Matchup";
import Team from "./Team";
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
    const bracket = {
      roundOne: {
        topLeft: [
          {
            teamA: "rutgers",
            teamB: "uPenn",
            winner: "rutgers"
          },
          {
            teamA: "uPenn",
            teamB: "american",
            winner: "american"
          }
        ],
        bottomLeft: [
          {
            teamA: "syracuse",
            teamB: "uconn",
            winner: "syracuse"
          },
          {
            teamA: "nyu",
            teamB: "xavier",
            winner: "nyu"
          }
        ]
      },
      roundTwo: {
        topLeft: [
          {
            teamA: false,
            teamB: false,
            winner: false
          },
          {
            teamA: false,
            teamB: false,
            winner: false
          }
        ]
      },
      roundThree: {
        topLeft: [
          {
            teamA: false,
            teamB: false,
            winner: false
          }
        ]
      }
    };

    const teams = {
      rutgers: {
        name: "Rutgers",
        slug: "rutgers",
        seed: "1"
      },
      fordham: {
        name: "Fordham",
        slug: "fordham",
        seed: "2"
      },
      american: {
        name: "American",
        slug: "american",
        seed: "1"
      },
      uPenn: {
        name: "U Penn",
        slug: "uPenn",
        seed: "2"
      },
      syracuse: {
        name: "Syracuse",
        slug: "syracuse",
        seed: "1"
      },
      uconn: {
        name: "U Conn",
        slug: "uconn",
        seed: "2"
      },
      nyu: {
        name: "NYU",
        slug: "nyu",
        seed: "1"
      },
      xavier: {
        name: "Xavier",
        slug: "xavier",
        seed: "2"
      }
    };

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

    // Actually get reseed func working, close!
    console.log(slug);
  };

  render() {
    return (
      <div className="App">
        <div>{JSON.stringify(this.state.teams)}</div>
        {Object.keys(this.state.bracket).map(round => (
          <Round>
            {Object.keys(this.state.bracket[round]).map(division => (
              <Division>
                {this.state.bracket[round][division].map(matchup => (
                  <Matchup>
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
