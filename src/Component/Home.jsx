import React from 'react';
import Heading from './Heading.jsx';
import HomeContent from './HomeContent.jsx';

const Home = () => {
    return(
        <div className='home'>
            <Heading content='Welcome Home' />
            <HomeContent children='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed.'  />
        </div>
        
    );
};

export default Home;