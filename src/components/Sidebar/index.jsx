import React from 'react'

import { Col } from 'react-bootstrap';

import SideButton from '../SidebarButton';



const Sidebar = () => {
  return (
    <Col sticky="top" sm={1}>
      <SideButton></SideButton> 
    </Col>
      

  )
}

export default Sidebar