import React, { useState } from 'react';
import Hero from '../Components/Hero';
import Information from '../Components/Information';
import Video from '../Components/Video';

function Home(props) {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
        <Hero/>
        <Information />
        <Video />
       </>
    );
}

export default Home;