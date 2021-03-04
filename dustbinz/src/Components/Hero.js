import React, {useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Icon from '@mdi/react'
import {mdiChevronLeft, mdiChevronRight, mdiPauseCircle, mdiPlayCircle, mdiMapMarkerRadius} from '@mdi/js'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Slide from 'react-reveal/Slide';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnimatedButton from '../Components/AnimatedButton';
import MapModal from './MapModal';


function Hero() {

    const [play, setPlay] = useState(true);
    const [showModal, setShowModal] = useState(false);

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

    const handleClose = ()=>{
        setShowModal(false);
    }



    return (
        <Jumbotron fluid>

                {/* Menu Buttons */}
                <Nav className="justify-content-center">
               

                    <Nav.Item>
                        <Nav.Link eventKey="home" 
                        onSelect={()=>console.log("home")}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="demo" 
                        onSelect={()=>console.log("demo")}>Demo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="about" 
                        onSelect={()=>console.log("about")}>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="contact" 
                        onSelect={()=>console.log("contact")}>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Container fluid>
                <Row>
                    {/* Mobile slideshow */}
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
                        <Col lg={8}>
                            <p className="tag-line">स्वच्छ भारत सुन्दर भारत</p>
                        </Col>
                </Row>
                <Row className="justify-content-center">
                    <AnimatedButton text="Locate The Nearest Dustbin"
                    path={mdiMapMarkerRadius}
                    handleClick={()=>setShowModal(true)}/>
                    <MapModal show={showModal} handleClose={handleClose}/>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;