import React from 'react';
import {motion} from 'framer-motion';
import Icon from '@mdi/react'; 

function AnimatedButton({text, path, handleClick}) {
    return (
    <>
        <motion.div
        className="anim-button btn btn-success d-none d-lg-block"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={handleClick}
        >
            <h style={{fontSize:25}}>{text}</h>
            <Icon
            path={path}
            size={3}
            />
        </motion.div>

        <motion.div
        className="anim-button btn btn-success d-sm-block d-lg-none"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={handleClick}
        >
            <h style={{fontSize:25}}>{text}</h>
            <Icon
            path={path}
            size={3}
            />
        </motion.div>
    </>
    );
}

export default AnimatedButton;