import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube-embed'
import VideoVisible from '../animations/VideoVisible';

function Video(props) {
    return (
        <Container className="video-container overflow-hidden" fluid>
            <p className="heading">Demo Video 📺</p>
            <Row>
                
                <VideoVisible img="./assets/illustrations/cherry-383.png" 
                id="A71aqufiNtQ"/>
                
                {/* for small screens */}
                <Col className="d-xs-block d-lg-none">
                   <YouTube id='A71aqufiNtQ' />
                </Col>
            </Row>
        </Container>
    );
}

export default Video;