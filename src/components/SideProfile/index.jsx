import React from 'react'
import { Col, Row } from 'react-bootstrap'
import profile from '../../img/profile.jpeg'
import { BsArrowRightSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';


const SideProfile = () => {
  return (
    <Row>
        <Col className='text-center'>
        <img className="img-fluid rounded-circle" width="150" src={profile} />
        <p className="fs-5 fw-bold">Joenathan Sirait</p>
        <Link to="/login" className="text-decoration-none text-dark fs-5"><BsArrowRightSquare  />Logout</Link>

        </Col>    
      </Row>
  )
}

export default SideProfile