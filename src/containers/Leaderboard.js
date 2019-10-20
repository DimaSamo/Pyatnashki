import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { connect } from 'react-redux'
import { fetchLeaderboard } from '../actions/fetchLeaderboard'
import Table from 'react-bootstrap/Table'

 class Leaderboard extends Component {
  render() {
    const entries = this.props.leaderboard.entries.map((entry, index) => {return     (
        <tbody>
        <tr>
            <td>{index+1}</td>
            <td>{entry.name}</td>
            <td>{entry.moves}</td>
        </tr>
        </tbody>
    )});


    return (
        <Container>
      <Table >
              <thead>
                <tr>
                <th>Rank #</th>
                <th>Name</th>
                <th>Moves</th>
                </tr>
            </thead>
            
      
        {entries}
      </Table>
      </Container>
    );
  }
      componentDidMount(){
        this.props.fetchLeaderboard();
    }
}



function mapDispatchToProps(dispatch){
    return { fetchLeaderboard: () => dispatch(fetchLeaderboard()) }
  }

  function mapStateToProps(state){
    return {leaderboard: state.leaderboard}
  }

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)