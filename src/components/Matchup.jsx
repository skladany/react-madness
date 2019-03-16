import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 0.5em 0;
`;

class Matchup extends React.Component {
  handleDetermineWinner = children => {
    const { team: teamA } = children[0].props;
    const { team: teamB } = children[1].props;

    console.log(children);

    this.props.determineWinner(
      teamA,
      teamB,
      this.props.round,
      this.props.division,
      this.props.matchId
    );
  };

  render() {
    return (
      <Wrapper>
        {this.props.children}
        {/* {this.props.matchId} */}
        <button onClick={() => this.handleDetermineWinner(this.props.children)}>
          Play
        </button>
      </Wrapper>
    );
  }
}

export default Matchup;
