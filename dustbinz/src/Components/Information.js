import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import LeftWhenVisible from '../animations/LeftWhenVisible';
import RightWhenVisible from '../animations/RightWhenVisible';


function Information(props) {

    return (
        <Container fluid className="information-container overflow-hidden">
            {/* Map Promotion */}
            <RightWhenVisible 
            img="./assets/illustrations/gummy-location.svg"
            text="Get the nearest dustbin instantly"/>

            {/* Rating Promotion */}
            <LeftWhenVisible 
            img="./assets/illustrations/ratings.svg"
            text="See how clean your area is?"/>

            {/* Reward Promotion */}
            <RightWhenVisible 
            img="./assets/illustrations/reward.svg"
            text="Get rewarded for your contributions"
            />
        </Container>
    );
}

export default Information;