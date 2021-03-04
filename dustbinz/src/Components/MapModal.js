import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DustbinzMap from './DustbinzMap';

function MapModal({show, handleClose}) {

    return (
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dustbinz
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DustbinzMap />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
}

export default MapModal;