import React from 'react';
import { Image, Jumbotron, Container, Col, Row, Card } from 'react-bootstrap'
import gall1 from './images/gall1.jpg';
import gall2 from './images/gall2.jpg';
import gall3 from './images/gall3.jpg';
import gall4 from './images/gall4.jpg';
import gall5 from './images/gall5.jpg';
import gall6 from './images/gall6.jpg';
import wifi from './images/wifi.png'
import fb from './images/fb.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    
    return (
     <Jumbotron fluid className="footer-catering" style={{backgroundColor: 'black', paddingBottom: '2rem'}}>
                 <Container fluid>
                    <Row>
                        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
                        <Link to="/gallery" >
                            <Image src={gall1} className="gallery-img py-3"></Image>
                        </Link></Col>
                        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
                        <Link to="/gallery" >
                            <Image src={gall2} className="gallery-img py-3"></Image>
                        </Link></Col>
                        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
                        <Link to="/gallery" >
                            <Image src={gall3} className="gallery-img py-3"></Image>
                        </Link></Col>

                        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
                        <Link to="/gallery" >
                            <Image src={gall4} className="gallery-img py-3"></Image>
                        </Link></Col>
                        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
                        <Link to="/gallery" >
                            <Image src={gall5} className="gallery-img py-3"></Image>
                        </Link></Col>
                        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
                        <Link to="/gallery" >
                            <Image src={gall6} className="gallery-img py-3"></Image>
                        </Link></Col>
                    </Row>
                </Container> 

                <Container fluid style={{backgroundColor: 'white'}}>
                 <h2 className="text-dark text-center py-2">Stay in Touch</h2>
                <Row>
                    <Col xl={6} md={6} sm={12}><Card style={{ width: '98%'}} >
                    <Card.Body>
                   
                    <h2>Visit us in 2 places in Lublin...</h2>
                    <h4 style={{float: 'left'}}>Wesoła 120D <br></br>
                        20-700 Lublin <br></br></h4>
                    <h4 style={{float: 'right'}}>Śmieszna 150C <br></br>
                        20-701 Lublin </h4>
                    </Card.Body>
                    <img src={wifi} alt="wifi icon" className="icon wifi-icon"/>
                        <h5 className="text-dark text-center">P.S. wifi is free ;)</h5>
                </Card></Col>
                    <Col xl={6} md={6} sm={12}><Card style={{ width: '98%' }} >
                    <Card.Body>
                   <h2>... or call us for <p style=
                        {{fontWeight: 900, fontStyle: 
                            'italic'}}>FAST DELIVERY</p></h2>
                    <h4 style={{float: 'left'}}>
                        Phone: 666 666 666
                    </h4>
                    <h4 style={{float: 'right'}}>
                        facebook.com/pizza&#38;restaurant
                    </h4>
                    </Card.Body>
                    <img src={fb} alt="wifi icon" className="icon fb-icon"/>
                </Card></Col>
                </Row>
                
                
                </Container>
        </Jumbotron>
        ) }
