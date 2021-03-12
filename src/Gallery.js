import React from 'react';
import { Carousel, Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import gall1 from './images/gall1.jpg';
import gall2 from './images/gall2.jpg';
import gall3 from './images/gall3.jpg';
import gall4 from './images/gall4.jpg';
import gall5 from './images/gall5.jpg';
import gall6 from './images/gall6.jpg';


export default function Gallery() {
    
    return (
     <Jumbotron fluid className="gallery-images" style={{backgroundColor: 'black'}}>
        
         {/* <Container>
                    <Row>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <Image src={gall1} className="gallery-img"
                            >
                                
                            </Image>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <Image src={gall1} className="gallery-img"/>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <Image src={gall1} className="gallery-img"/>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <Image src={gall1} className="gallery-img"/>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <Image src={gall1} className="gallery-img"/>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <Image src={gall1} className="gallery-img"/>
                        </Col>
                    </Row>
                </Container> */}

         <Carousel fade className="carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gall1}
      alt="slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gall2}
      alt="slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gall3}
      alt="slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gall4}
      alt="slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gall5}
      alt="slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gall6}
      alt="slide"
    />
  </Carousel.Item>
</Carousel>
<Link to="/" >
    <Button variant="dark" className="btn btn-home">&#8682;</Button>
</Link>
        </Jumbotron>
        )
}
