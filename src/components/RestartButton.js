import React from "react";
import Button from 'react-bootstrap/Button'

function RestartButton(props) {
    return (
     <Button className="restart" onClick={props.onClick} variant="danger">Restart Game</Button>
    );
  }

  export default RestartButton;
