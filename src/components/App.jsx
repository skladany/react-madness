import React, { Component } from "react";
import styled from "styled-components";
import Bracket from "./Bracket";
import { bracket, teams } from "../bracket-team-data";
import { coinFlips } from "../coinFlips";
import "../css/App.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component {
  state = {
    bracket,
    teams
  };

  componentDidMount() {
    this.getCoinFlips().then(data => {
      this.setState({
        coinFlips: data.split("\n")
      });
    });
  }

  /* Function works! Using cached data now for testing */
  getCoinFlips = async () => {
    // const response = await fetch(
    //   "https://www.random.org/integers/?num=100&min=0&max=1&col=1&base=10&format=plain&rnd=new"
    // );

    // const data = await response.text();

    // return data;
    return coinFlips;
  };

  // 1 = heads
  // 0 = tails
  getCoinFlip = () => {
    const coinFlips = [...this.state.coinFlips];

    const coinFlip = coinFlips.pop();

    this.setState({
      coinFlips
    });

    return coinFlip;
  };

  /* Heads (1) goes to seedA
     Tails (0) goes to seedB

     Returns true is Seed A wins, 
     false if seedB wins */
  flipCoin = (seedA, seedB) => {
    console.log("seedA", seedA);
    console.log("seedB", seedB);

    seedA = 4;
    seedB = 4;

    let seedAwins = 0;
    let seedBwins = 0;

    while (seedAwins < seedA && seedBwins < seedB) {
      let flipIsHeads = this.getCoinFlip();

      if (flipIsHeads) {
        seedAwins++;
      } else seedBwins++;

      console.log(
        `Flip is ${flipIsHeads} - seedAwins: ${seedAwins}, seedBwins: ${seedBwins}`
      );

      // Check for a winner
      if (seedAwins == seedA) {
        console.log("seedAwins wins", seedAwins);
        return true;
      }

      if (seedBwins == seedB) {
        console.log("seedBwins wins", seedBwins);
        return false;
      }
    }
  };

  handleSeedChange = (valueAsNumber, valueAsString, input) => {
    const slug = input.name;

    const teams = { ...this.state.teams };

    teams[slug].seed = valueAsNumber;

    this.setState({
      teams
    });
  };

  determineWinner = ({ teamA, teamB, round, division, matchId }) => {
    // State is updating, but not getting passed down to round 2 as it should

    // Arbitrary set state of teamA to "win"
    let bracket = { ...this.state.bracket };

    // Set up next match as well
    const nextRound = parseInt(round) + 1;
    const nextMatchId = Math.floor(matchId / 2);
    const teamLocation = matchId % 2 ? "teamB" : "teamA";

    console.log(Math.round(Math.random()) === 0);

    // Super simple way to psueodo randomly pick a winner
    const winningTeamSlug = this.flipCoin(
      parseInt(teamA.seed),
      parseInt(teamB.seed)
    )
      ? teamA.slug
      : teamB.slug;

    bracket[division][round][matchId].winner = winningTeamSlug;
    bracket[division][nextRound][nextMatchId][teamLocation] = winningTeamSlug;

    this.setState({
      bracket
    });
  };

  pickWinner = ({ team, round, division, matchId, winner }) => {
    return;

    // State is updating, but not getting passed down to round 2 as it should

    // Arbitrary set state of teamA to "win"
    let bracket = { ...this.state.bracket };

    // Set up next match as well
    const nextRound = parseInt(round) + 1;
    const nextMatchId = Math.floor(matchId / 2);
    const teamLocation = matchId % 2 ? "teamB" : "teamA";

    console.log("d", division);
    console.log(round);
    console.log(matchId);
    console.log(winner);

    // Set the pick!
    bracket[division][round][matchId].winner = winner;
    bracket[division][nextRound][nextMatchId][teamLocation] = winner;

    console.log("hey", winner);

    this.setState({
      bracket
    });
  };

  unPickWinner = ({ team, round, division, matchId, winner }) => {
    return;

    // State is updating, but not getting passed down to round 2 as it should

    // Arbitrary set state of teamA to "win"
    let bracket = { ...this.state.bracket };

    // Set up next match as well
    const nextRound = parseInt(round) + 1;
    const nextMatchId = Math.floor(matchId / 2);
    const teamLocation = matchId % 2 ? "teamB" : "teamA";

    console.log("d", division);
    console.log(round);
    console.log(matchId);
    console.log(winner);

    // Unset this box
    bracket[division][round][matchId].winner = false;

    // Unset the child box
    bracket[division][nextRound][nextMatchId * 2][teamLocation] = false;

    // Unset the parent box
    bracket[division][round - 1][matchId * 2].winner = false;
    // bracket[division][nextRound - 1][nextMatchId * 2][teamLocation] = false;

    this.setState({
      bracket
    });
  };

  render() {
    const status = <li>flip a coin</li>;

    return (
      <div className="App">
        {JSON.stringify(this.state)}
        <ul>{status}</ul>
        <Bracket
          bracket={this.state.bracket}
          teams={this.state.teams}
          handleSeedChange={this.handleSeedChange}
          determineWinner={this.determineWinner}
          pickWinner={this.pickWinner}
          unPickWinner={this.unPickWinner}
        />
      </div>
    );
  }
}

export default App;
