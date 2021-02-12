import React, {useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Icon from '@mdi/react'
import {mdiChevronLeft, mdiChevronRight, mdiMenu, mdiPauseCircle, mdiPlayCircle} from '@mdi/js'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Slide from 'react-reveal/Slide';

function Hero({setSidebarOpen}) {

    const [play, setPlay] = useState(true);

    const nextIcon = ()=>{
        return(

        <Icon path={mdiChevronRight}
        size={2}
        color="black"
        />
        );
    }

    const prevIcon = ()=>{
        return(

        <Icon path={mdiChevronLeft}
        size={2}
        color="black"
        />
        );
    }



    return (
        <Jumbotron fluid>
            <Container fluid>
                <Row>

                    <Col lg={{offset:1}} className="d-none d-lg-block">

                        <Slide top>
                        <Card className="phone-card">
                        <Card.Body>
                            
                        {/* 300X500 px */}
                        <Carousel interval={play?5000:null}
                        nextIcon={nextIcon()}
                        prevIcon={prevIcon()}>
                        <Carousel.Item className="phone-slide"> 
                            <img
                            src="./assets/img/1.png"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            src="./assets/img/2.png"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            src="./assets/img/3.png"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>
                            
                        </Card.Body>
                        <Card.Body className="phone-footer">
                            <Button variant="light" className="menu-button"
                            onClick={()=>setPlay(!play)}>
                            <Icon path={play?mdiPauseCircle:mdiPlayCircle}
                            size={1}
                            color="black"
                        />
                            </Button>
                        </Card.Body>
                        </Card>
                        </Slide>

                        </Col>
                    
                    <Col xs={12} xs={{offset:5, span:5}} lg={{span:1,offset:1}}>
                        <Button variant='light' className="menu-button">
                        <Icon path={mdiMenu}
                        size={2}
                        color="black"
                        onClick={setSidebarOpen}
                        />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;