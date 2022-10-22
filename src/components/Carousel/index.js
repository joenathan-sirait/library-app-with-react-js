import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { dataBooks } from '../../data/book';

const Carousels = () => {
    const [books] = useState(dataBooks)
  return (
    <Row>
        <Col>
        <Carousel className="text-center my-5 bg-dark">
           
        {books.map((book) => {
              return (
                <Carousel.Item>
            <Link className="text-decoration-none text-dark" to={'/detail/' + book.id }>
                <img
                width="800"
                src={book.image}
                alt="First slide"
                />
                </Link>
                </Carousel.Item>
              );
            })}  
             
            </Carousel>
        </Col>
    </Row>
  );
}



export default Carousels