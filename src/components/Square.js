import React from 'react'
import { connect } from 'react-redux'
import moveSquare from '../actions/moveSquare'
import incrementMoves from '../actions/incrementMoves'
class Square extends React.Component {

    handleOnClick = () => {
      this.props.moveSquare(this.props.id)
      this.props.incrementMoves({board: this.props.board, index: this.props.id})
      
    }

    render() {
      return (
        <button id={this.props.id} className="square" onClick={this.handleOnClick} >
          {this.props.value}
        </button>
      );
    }
  }

  const mapStateToProps = (state) => {
    return { board: state.board };
  };

  const mapDispatchToProps = dispatch => {
    return {
      moveSquare: (index) => { dispatch(moveSquare(index)) },
      incrementMoves: (payload) => {dispatch(incrementMoves(payload))}
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Square)