import React, { useState } from 'react';
import Hero from '../Components/Hero';
import CustomSidebar from '../Components/CustomSidebar'
import Video from '../Components/Video';

function Home(props) {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
        <CustomSidebar sidebarOpen={sidebarOpen} 
        onSetSidebarOpen={(open)=>setSidebarOpen(open)}/>
        <Hero setSidebarOpen={()=>setSidebarOpen(true)}/>
        <Video />
       </>
    );
}

export default Home;