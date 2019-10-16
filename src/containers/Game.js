
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Board from './Board'
class Game extends React.Component {
 
    render() {

      return (
        <div>
            <Board/>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return { board: state.board };
  };

  export default connect(mapStateToProps)(Board)