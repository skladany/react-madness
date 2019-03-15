import React from "react";
import styled from "styled-components";
import Team from "./Team";

const Wrapper = styled.section`
  width: 100%;
  padding: 0.5em 0;
`;

class Matchup extends React.Component {
  state = {
    winner: false
  };

  determineWinner = children => {
    // const { team: teamA } = children[0].props;
    // const { team: teamB } = children[1].props;

    // this.props.determineWinner(teamA, teamB, this.props.bracketPath);
    this.setState({
      winner: this.props.teamA.slug
    });
  };

  render() {
    return (
      <Wrapper>
        <Team
          team={this.props.teamA}
          winner={this.state.winner}
          handleSeedChange={this.handleSeedChange}
        />
        <Team
          team={this.props.teamB}
          winner={this.state.winner}
          handleSeedChange={this.handleSeedChange}
        />
        <button onClick={() => this.determineWinner()}>Play</button>
      </Wrapper>
    );
  }
}

export default Matchup;
