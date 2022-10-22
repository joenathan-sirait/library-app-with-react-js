import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ModalShow from '../../components/Modal';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import ModalDelete from '../../components/ModalDelete';
import { dataBooks } from '../../data/book';
import { Col, Container, Row } from 'react-bootstrap';

const Detail = () => {
    const {id} = useParams();
    const [book] = useState( dataBooks[id-1]);
 
   
  return (
    <div>
        <img style={{width: "100vw", height: "50vh"}} src={book.image} alt="" />
        <div className="d-flex position-absolute top-0 end-0 me-3 mt-3 "> 
       <ModalShow dataAlert="Succesfuly Edit Data" className="text-light fs-3 fw-bold me-5" buttonName="Edit" modalTitle="Edit Data"></ModalShow>
       <ModalDelete  className="text-light fs-3 fw-bold" buttonName="Delete" modalTitle="Delete Data" desc="Succesfully Delete Data"></ModalDelete>
       
       </div>
       <Link className='fs-1 fw-bold text-decoration-none text-light position-absolute top-0 start-0 ms-3 mt-3'  to="/"><BsFillArrowLeftCircleFill /></Link>
        
        <Container >
        <Row>
        <Col sm={10}>
        <Row>
          <Col sm={8}>
            <Link className="btn btn-warning text-light mt-3 mb-2">{book.category}</Link>
            <h3 className="fs-3 fw-bolder ">{book.title}</h3>
            <p>{book.date}</p>
          </Col>
          <Col sm={4}>
          <div>
            {(() => {
              if (book.availability == "empty") {
                return (
                  <p className='fs-3 mt-3 fw-bolder text-danger'>{book.availability}</p>

                )
              } else {
                return (
                  <p className='fs-3 mt-3 fw-bolder text-success'>{book.availability}</p>
                )
              }
            })()}
          </div>
           
            
            
          </Col>
          <Col sm={8}>
          <p>{book.description}</p>
          </Col>
        </Row>
        </Col>
        <Row>
          
        </Row>
        <Col sm={2}>
          <img className="position-absolute end-0 me-5" width={200} style={{position: "absolute", top: "180px"}} src={book.cover} alt="cover-book" />
          {(() => {
              if (book.availability == "empty") {
                return (
                  <ModalDelete className="btn btn-warning text-light fs-4 fw-bold position-absolute w-25 end-0 bottom-0 mb-5 me-3 disabled" buttonName="Borrow" modalTitle="Borrow Data" desc="Succesfully Borrow Data" ></ModalDelete>
                )
              } else {
                return (
                  <ModalDelete className="btn btn-warning text-light fs-4 fw-bold position-absolute w-25 end-0 bottom-0 mb-5 me-3 " buttonName="Borrow" modalTitle="Borrow Data" desc="Succesfully Borrow Data" ></ModalDelete>

                )
              }
            })()}
        </Col>
        </Row>
        </Container>
      
    </div>
  )
}

export default Detail