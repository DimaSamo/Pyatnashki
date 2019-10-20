import React from 'react'
import { connect } from 'react-redux'
class Moves extends React.Component {


    render() {
      return (
        <div className="moves">
            Moves: {this.props.moves}
        </div>
      );
    }
  }


  const mapStateToProps = (state) => {
    return { moves: state.moves, board: state.board };
  };

  // const mapDispatchToProps = dispatch => {
  //   return {
  //     startGame: () => { dispatch(startGame()) }
  //   }
  // }

  export default connect(mapStateToProps)(Moves)