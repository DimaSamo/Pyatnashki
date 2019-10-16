
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from '../components/Square'
import startGame from '../actions/startGame'
class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }

     shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }


    componentDidMount() {
      this.props.startGame();
    }
    
    render() {
      return (
          
        <div>
            {console.log(this.props.board)}
          <div className="board-row">
            {this.renderSquare(this.props.board[0])}
            {this.renderSquare(this.props.board[1])}
            {this.renderSquare(this.props.board[2])}
            {this.renderSquare(this.props.board[3])}
          </div>
          <div className="board-row">
            {this.renderSquare(this.props.board[4])}
            {this.renderSquare(this.props.board[5])}
            {this.renderSquare(this.props.board[6])}
            {this.renderSquare(this.props.board[7])}
          </div>
          <div className="board-row">
            {this.renderSquare(this.props.board[8])}
            {this.renderSquare(this.props.board[9])}
            {this.renderSquare(this.props.board[10])}
            {this.renderSquare(this.props.board[11])}
          </div>
          <div className="board-row">
            {this.renderSquare(this.props.board[12])}
            {this.renderSquare(this.props.board[13])}
            {this.renderSquare(this.props.board[14])}
            {this.renderSquare(this.props.board[15])}
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return { board: state.board };
  };

  const mapDispatchToProps = dispatch => {
    return {
      startGame: () => { dispatch(startGame()) }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Board)