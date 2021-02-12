import React from 'react';
import Sidebar from 'react-sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Icon from '@mdi/react'
import { mdiCloseCircle, mdiHome, mdiInformation, mdiThoughtBubble } from '@mdi/js';
function CustomSidebar({sidebarOpen, onSetSidebarOpen}) {

    const sidebarContent = ()=>
    {
        return (

            <Container className="m-3">

                <Row className="mb-4">
                    <Button variant="info" size="lg" className="side-button">
                        
                        <Icon path={mdiHome}
                        size={1}
                        color="black"
                        className="mr-1"
                        />
                        Home
                        
                    </Button>
                </Row>

                <Row className="mb-4">
                    <Button variant="info" size="lg" className="side-button">
                        
                        <Icon path={mdiThoughtBubble}
                        size={1}
                        color="black"
                        className="mr-1"
                        />
                        Insight
                        
                    </Button>
                </Row>

                <Row className="mb-4">
                    <Button variant="info" size="lg" className="side-button">
                        
                        <Icon path={mdiInformation}
                        size={1}
                        color="black"
                        className="mr-1"
                        />
                        About
                        
                    </Button>
                </Row>
            </Container>
              

        );
    }
    return (
        <Sidebar
        sidebar={sidebarContent()}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        pullRight
        styles={{ sidebar: { background: "#d1d8dd" } }}
        >
        </Sidebar> 
    );
}

export default CustomSidebar;