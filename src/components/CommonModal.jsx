import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CommonModal = ({ show, handleClose, title, body, footer }) => {
  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}




      <Modal.Body>{body}</Modal.Body>

      {footer !== false && (
        <Modal.Footer>
          {footer || (
            <>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </>
          )}
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default CommonModal;
