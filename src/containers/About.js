import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import AboutContent from "../components/AboutContent"


export default class About extends Component {
  render() {
    return (
      <Container
        style={{ alignContent: "center", padding: "2em", fontSize: "26px"}}>
      
        <AboutContent/>
      </Container>
    );
  }
}