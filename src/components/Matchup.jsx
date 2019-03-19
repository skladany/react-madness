import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 0.5em 0;
`;

class Matchup extends React.Component {
  handleDetermineWinner = (children, winner) => {
    const { team: teamA } = children[0].props;
    const { team: teamB } = children[1].props;

    this.props.determineWinner({
      teamA,
      teamB,
      round: this.props.round,
      division: this.props.division,
      matchId: this.props.matchId,
      winner
    });
  };

  render() {
    const playGame =
      this.props.children[0].props.team &&
      this.props.children[1].props.team &&
      !this.props.children[0].props.winner &&
      !this.props.children[1].props.winner ? (
        <button
          onClick={() =>
            this.handleDetermineWinner(this.props.children, "rutgers")
          }
        >
          Play
        </button>
      ) : (
        ""
      );

    return (
      <Wrapper>
        {this.props.children}
        {playGame}
      </Wrapper>
    );
  }
}

export default Matchup;
