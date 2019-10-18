import React, { Component } from 'react'
import { connect } from 'react-redux'
import moveSquare from '../actions/moveSquare'
class Square extends React.Component {
    render() {
      return (
        <button id={this.props.id} className="square" >
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
      moveSquare: () => { dispatch(moveSquare()) }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Square)