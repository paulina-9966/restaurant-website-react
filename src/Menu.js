import React from 'react';
import { Navbar, Nav, Container, 
    Row, Col, NavDropdown, Jumbotron, Button,
  Image } from 'react-bootstrap'
import restaurant from './images/restaurant.jpg'
import restaurant1 from './images/restaurant1.jpg'
import party from './images/party.jpg'
import cafe from './images/cafe.jpg'
import dinner from './images/dinner.jpg'
import pizza from './images/pizza.jpg'

export default function Menu() {

    return (
        <>
        <Container className="menu-container">
  
  <Row className="container text-center" style={{fontWeight: '6 b00'}}>
      <Col xs={12} md={4}>
          <Image src={dinner} alt="dinner" className="menu-img"/>
          <h2>Delicius dinner</h2>
          <p>Sed ut perspiciatis unde vitae Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              veniam, quis</p></Col>
      <Col xs={12} md={4}>
        <img src={cafe} alt="cafe" className="menu-img"/>
          <h2>Hot Caffee</h2>
          <p>Sed ut perspiciatis unde vitae Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              veniam, quis</p>
      </Col>
      <Col xs={12} md={4}>
          <img src={pizza} alt="pizza" className="menu-img"/>
          <h2>Italian Pizza</h2>
          <p className="text-center">Sed ut perspiciatis unde vitae Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              veniam, quis</p></Col>
    </Row>
    <Row>
      <img src={restaurant1} alt="" className="back-img"/>
    </Row>
  </Container>
  <Button variant="danger" className="rounded btn-order" >Online orders</Button>
  
        </>
    )
}