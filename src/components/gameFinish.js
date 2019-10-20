import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ScoreForm from "./ScoreForm";


function MyModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Submit your score!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>You won in {props.moves} moves!</h4>
          <ScoreForm moves={props.moves}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyModal;
