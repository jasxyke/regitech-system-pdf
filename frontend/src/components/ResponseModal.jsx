import React from "react";
import css from "./ResponseModal.module.css";
import { Button, Modal } from "react-bootstrap";

const ResponseModal = ({ show, handleClose, response, headerText }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className={css.modalHead}>
        <Modal.Title>{headerText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{response}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResponseModal;
