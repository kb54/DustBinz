// Swipes *to* left when comes in-view
import React, { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LeftWhenVisible({img, text}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(()=>{
        if(inView) controls.start("visible");
        if(!inView) controls.start("hidden");

    }, [controls, inView]);

    const imageVariantRight = {
        hidden: {
            x:"+100vw"
        },
        visible: {
            x:0,
            transition :{
                delay: 0.3,
                duration: 0.5,
                type:"spring",
                bounce: 0.4
            }
        }
    }

    const textVariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay:0.5,
                duration:1
            }
        }

    }

    return (

        <Row className="align-items-center anim-container-left">

                <Col xs={12} lg={4} lg={{order:'last'}}>
                    <motion.img
                    src={img}
                    className="img-fluid"
                    variants={imageVariantRight}
                    initial="hidden"
                    animate={controls}
                    />
                </Col>

                <Col xs={12} lg={5} lg={{offset:3, order:'first'}}>
                    <motion.h1 className="info-text-secondary"
                    variants={textVariant}
                    initial="hidden"
                    animate={controls}
                    ref={ref}>
                        {text}
                    </motion.h1>
                </Col>
            </Row>
        
    );
}

export default LeftWhenVisible;