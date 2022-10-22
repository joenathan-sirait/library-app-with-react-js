
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { BsFillCheckCircleFill } from "react-icons/bs";


const ModalDelete = (props) => {
      const { buttonName, modalTitle, desc, className} = props;
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => {
      if (window.confirm("Do you want to save changes?") == true) {
          setShow(true);
      } else {
        setShow(false)
      }
        
      } 

  return (   
        <Row>
          <Button className={className} variant="none" onClick={handleShow}>
            {buttonName}
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <BsFillCheckCircleFill />
            <h3>{desc}</h3>
            </Modal.Body>
          </Modal>
          </Row> 
      );
    }
    
   
export default ModalDelete