import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsList  } from 'react-icons/bs';
import SideLink from '../SideLink';
import SideProfile from '../SideProfile';

const SideButton = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
  
      <Row className="flex mt-2 ">
          <Button variant="none" onClick={handleShow}>
          <BsList  className='fs-3 fw-bold'/>
          </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <SideProfile></SideProfile>
        <SideLink></SideLink>
        </Offcanvas.Body>
      </Offcanvas>
      </Row>
  
      
    )
  }
  
  export default SideButton
