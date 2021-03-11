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

export default function Party() {

    return (
        <>
       <Container className="party-container my-2 text-center" lg={12}>
<Row>
    <Col>
        </Col>
    <Col xs={10}>
        <div className="party-desc">
            <h5 style={{fontSize: '1.5rem'}}>We can organize your party or bisness meeting</h5>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            veniam, quis</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            veniam, quis</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            veniam, quis</p>
        </div>
        
    </Col>
    <Col>
        </Col>
  </Row>
  <Image src={party} alt="" className="party-img"/>
</Container>
        </>
    )
}