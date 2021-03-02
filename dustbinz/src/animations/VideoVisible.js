// Swipes *to* left when comes in-view
import React, { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube-embed'

function VideoVisible({img, id}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(()=>{
        if(inView) controls.start("visible");
        if(!inView) controls.start("hidden");

    }, [controls, inView]);

    const imageVariantRight = {
        hidden: {
            x:"-100vw"
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

    const VideoVariant = {
        hidden: {
            opacity: 0,
            borderColor: '#ff0055',
        },
        visible: {
            opacity: 1,
            borderColor: '#0099ff',
            transition: {
                delay:0.5,
                duration:1
            }
        }
    }

    return (
        <>
            <Col lg={3} className="d-none d-lg-block" ref={ref}>
                <motion.img
                src={img}
                className="img-fluid"
                variants={imageVariantRight}
                initial="hidden"
                // animate="visible"
                animate={controls}
                />
            </Col>
            
            <motion.div
                variants={VideoVariant}
                initial="hidden"
                animate={controls}
                className="col d-none d-lg-block lg-9">
                
                    <YouTube id={id} />
                
            </motion.div>

        </>
    );
}

export default VideoVisible;