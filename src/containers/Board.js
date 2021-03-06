
import React from 'react'
import { connect } from 'react-redux'
import Square from '../components/Square'

import startGame from '../actions/startGame'

class Board extends React.Component {

    renderBoard(){
      return (this.props.board.map((num,index) => {
        if (index === 0 ||index ===4 || index === 8 || index === 12 ) {
          return (
            <div className="board-row" key={index}>
              <Square value={this.props.board[index]} id={index}/>
              <Square value={this.props.board[index+1]} id={index+1}/>
              <Square value={this.props.board[index+2]} id={index+2}/>
              <Square value={this.props.board[index+3]} id={index+3}/>
            </div>
          )
        }
      })).filter(function(e){return e})   
    }

    // componentDidMount() {
    //   this.props.startGame();
      
    // }

    
    render() {
      return (
          
        <div className="game">
            {this.renderBoard()}
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