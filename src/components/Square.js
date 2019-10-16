import React, { Component } from 'react'
import { connect } from 'react-redux'
class Square extends React.Component {
    render() {
    
      return (
        <button id={this.props.id} className="square" >
          {this.props.value}
        </button>
      );
    }
  }

  export default Square