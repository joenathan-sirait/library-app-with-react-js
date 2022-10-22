
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../Input';

const ModalShow = (props) => {
      const { buttonName, modalTitle, className, dataAlert} = props;
      const [show, setShow] = useState(false);
      const handleClose = () =>{
        setShow(false);
      } 
      const handleSave = () => {
        setShow(false)
        const myObj = dataAlert;
        alert (JSON.stringify(myObj)); 
      }
      const handleShow = () => setShow(true);

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
            <form>
                    <div class="mb-3">
                      <Input type="text"placeholder="Url Image :"></Input>
                    </div>
                    <div class="mb-3">
                    <Input type="text"placeholder="Title : "></Input>
                      </div>
                    <div class="mb-3">
                    <div class="form-group">
                      <textarea placeholder="Description : " class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    </div>  
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          </Row> 
      );
    }
    
   
export default ModalShow