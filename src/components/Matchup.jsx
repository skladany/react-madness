import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 0.5em 0;
`;

class Matchup extends React.Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export default Matchup;
