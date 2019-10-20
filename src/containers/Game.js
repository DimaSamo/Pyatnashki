
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Board from './Board'
import Moves from '../components/Moves'
class Game extends React.Component {
 
    render() {
      return (
        <div>
            <Board/>
            <Moves />
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return { board: state.board };
  };

  export default connect(mapStateToProps)(Game)