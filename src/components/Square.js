import React, { Component } from 'react'
import { connect } from 'react-redux'
import moveSquare from '../actions/moveSquare'
class Square extends React.Component {

    handleOnClick = () => {
      this.props.moveSquare(this.props.id)
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
      moveSquare: (index) => { dispatch(moveSquare(index)) }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Square)