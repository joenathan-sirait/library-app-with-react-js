import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ModalShow from '../Modal'

const SideLink = () => {
  return (

    <Row className="text-start ms-2 my-5">
        <Link className="text-decoration-none text-dark fs-5 fw-bolder mb-2">Explore</Link>
        <Link className="text-decoration-none text-dark fs-5 fw-bolder" >History</Link>
        <ModalShow dataAlert="Succesfuly added data" className="text-start fs-5 fw-bolder" buttonName="Add Data" modalTitle="Add Data"></ModalShow>
    </Row>

    
  )
}

export default SideLink