import React from 'react';
import { Image, Jumbotron, Container, Col, Row } from 'react-bootstrap'
import Fotorama from 'fotorama-react-wrapper'
import gall1 from './images/gall1.jpg'

export default function Footer() {
    return (
        <Jumbotron fluid className="footer-catering">
                <Container>
                    <Row>
                        <Col xl={2} lg={2} md={3} sm={4} xs={6}>
                            <Image src={gall1} className="gallery-img"/>
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={4} xs={6}>
                        <Image src={gall1} className="gallery-img"/>
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={4} xs={6}>
                        <Image src={gall1} className="gallery-img"/>
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={4} xs={6}>
                        <Image src={gall1} className="gallery-img"/>
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={4} xs={6}>
                        <Image src={gall1} className="gallery-img"/>
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={4} xs={6}>
                        <Image src={gall1} className="gallery-img"/>
                        </Col>
                    </Row>
                </Container>
                {/* <Fotorama data-allowfullscreen="true"
		   data-nav="thumbs"
		   data-width="800"
		   data-height="600" >
                <Image src={gall1} className="gallery-img"/>
                <Image src={gall1} className="gallery-img"/>
                <Image src={gall1} className="gallery-img"/>

                <Image src={gall1} className="gallery-img"/>
                <Image src={gall1} className="gallery-img"/>
                <Image src={gall1} className="gallery-img"/>
                </Fotorama> */}
        </Jumbotron>
    )
}

