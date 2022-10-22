import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Cards from '../../components/Card'
import Carousels from '../../components/Carousel'

import Sidebar from '../../components/Sidebar'
import LayoutV1 from '../../layouts/v1'

const Home = () => {

  return (
    <Container fluid>
      <Row  className="shadow"> 
        <Sidebar></Sidebar>
        <Col  sm={11}><LayoutV1></LayoutV1></Col>
      </Row>
      <Carousels></Carousels>
      <Cards></Cards>
    </Container>
   
  )
}

export default Home