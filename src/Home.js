import React from 'react';
import { Navbar, Nav, Container, 
    Row, Col, NavDropdown, Jumbotron } from 'react-bootstrap'
import restaurant from './images/restaurant.jpg'
import Menu from './Menu'
import Party from './Party'
import Promo from './Promo'
import Catering from './Catering'
import Footer from './Footer'

export default function Home() {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Navbar.Brand href="#home">Pizza &amp; Restaurant</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
{/* ///// navbar end ////// */}

{/* ///// backgroud and modal */}

<Container fluid>
    <Row>
        <Col>
           <img src={restaurant} alt="restaurant" className="restaurant-img"/>  
           <span className="banner"> Pizza &amp; Restaurant</span>
        </Col>
    </Row>
</Container>
{/* ///// backgroud and modal end //////*/}
<Container className="desc-container">
<Row>
    <Col></Col>
    <Col xs={10} className="text-center">
        <h2 className="text-uppercase">short description</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
            veniam, quis</p>
    </Col>
    <Col></Col>
  </Row>
</Container>
<Menu />       
< Party />
<div className="div-promo">
  < Promo />
</div>
< Catering />
< Footer />
        </>
    )
}

