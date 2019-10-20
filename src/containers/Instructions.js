import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import InstructionsContent from "../components/InstructionsContent"


export default class Instructions extends Component {
  render() {
    return (
      <Container
        style={{ alignContent: "center", padding: "2em", fontSize: "26px"}}>
      
        <InstructionsContent/>
      </Container>
    );
  }
}