import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { sendEntry } from "../actions/sendEntry";
import { connect } from 'react-redux'


 class ScoreForm extends Component {

    state = {
        name: ""
    };

    handleChange = event => {

        this.setState({
          [event.target.name]: event.target.value
        });
      };

      handleSubmit = event => {
          const entry = {leaderboard: {name: this.state.name, moves: this.props.moves}}
          this.props.sendEntry(entry)
      };


  render() {
    return (
        <Form
          onSubmit={this.handleSubmit}
        >
              <Form.Group>
                <Form.Label>Your Name:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                  required
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
        </Form>
    );
  }
}

function mapDispatchToProps(dispatch){
    return { sendEntry: (entry) => dispatch(sendEntry(entry)) }
  }

  export default connect(null, mapDispatchToProps)(ScoreForm)