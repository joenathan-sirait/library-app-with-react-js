import React, { useEffect, useState } from 'react'
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import { dataBooks } from '../../data/book';
const Cards = () => {
 const [books] = useState(dataBooks)
  return (
    <Row className="text-start ms-5 mb-5">
        <Col className="mb-5" sm={12}>
        <h1>List Book</h1>
        </Col>
        
        {books.map((book) => {
              return (
                <Col sm={4} >
                 
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Link className="text-decoration-none text-dark" to={'/detail/' + book.id }>
               <Card.Img variant="top" src={book.image} />
                
                     <Card.Title>{book.title}</Card.Title>
                     
                     
                     <Card.Text>{book.description}</Card.Text>
                     </Link>
               </Card.Body> 
               
               <ListGroup className="list-group-flush">
                     <ListGroup.Item>Creation By : {book.creation}</ListGroup.Item>
                </ListGroup>
               </Card>
               
               </Col>
              );
            })}  
    </Row>
  )
}

export default Cards