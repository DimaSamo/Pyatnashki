
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Board from './Board'
import Moves from '../components/Moves'
import { winningBoard } from '../lib/utils'
import { isGameWon } from '../lib/utils'
import MyModal from '../components/gameFinish'
import startGame from '../actions/startGame'
import resetMoves from '../actions/resetMoves'
class Game extends React.Component {


  renderGameFinish(){
    if (isGameWon(this.props.board)) {
      // return <p>GAME WON</p>
      return (<MyModal show={isGameWon(this.props.board)} onHide={this.resetGame.bind(this)}/>)
    }
  }

  resetGame(){
    this.props.startGame()
    this.props.resetMoves()
  }
 
    render() {
      return (
        <div>
            <Board/>
            <Moves />
            {this.renderGameFinish()}
        </div>
      );
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      startGame: () => { dispatch(startGame()) },
      resetMoves: () => {dispatch(resetMoves())}
    }
  }

  const mapStateToProps = (state) => {
    return { board: state.board };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Game)