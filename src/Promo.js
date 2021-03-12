import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap'
import person from './images/person.jpg'
import pizza2 from './images/pizza2.jpg'
import dinner2 from './images/dinner2.jpg'
import lemonade from './images/lemonade.jpg'

export default function Promo() {
    return (
        <>
        <Container fluid className="container container-promo">
            <Row>
                <Col xl={3} md={6} sm={6} xs={12}>
                    <Image src={person} alt="chef" className="person-img"/>
                    <h4 className="text-center">Chef's special offer &#8608; </h4>
                </Col>
                <Col xl={3} md={6} sm={6} xs={12}>
                <Image src={pizza2} alt="pizza photo" className="food-img"/>
                    <h4 className="text-center promo-desc">2 big pizza's only 35 $</h4>
                </Col>
                <Col xl={3} md={6} sm={6} xs={12}>
                <Image src={dinner2} alt="dinner photo" className="food-img"/>
                    <h4 className="text-center promo-desc">Fantastic lunch menu</h4>
                </Col>
                <Col xl={3} md={6} sm={6} xs={12}>
                <Image src={lemonade} alt="drink photo" className="food-img"/>
                    <h4 className="text-center promo-desc">free lemonade wensday's</h4>
                </Col>
            </Row>
        </Container>
        </>
    )
}

