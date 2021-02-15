import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ReactPlayer from 'react-player/youtube'
import Fade from 'react-reveal/Fade';

function Video(props) {
    return (
        <Container className="video-container" fluid>
            <Fade top>
            <p className="heading">Demo Video</p>
            </Fade>
            <Fade top>
            <Row>
                <Col xs={12} lg={2} className="d-none d-lg-block">
                <Image src='./assets/illustrations/cherry-383.png' className="illustration"/>
                </Col>

                <Col lg={10} lg={{offset:1}} className="d-none d-lg-block">
                    <ReactPlayer 
                    url="https://www.youtube.com/watch?v=qGs9H2cd-sI"
                    width="1000px"
                    height="500px"/>
                </Col>
               
                <Col className="d-xs-block d-lg-none">
                    <ReactPlayer 
                    url="https://www.youtube.com/watch?v=qGs9H2cd-sI"
                    width="380px"
                    height="200px"/>
                </Col>
            </Row>
            </Fade>
        </Container>
    );
}

export default Video;