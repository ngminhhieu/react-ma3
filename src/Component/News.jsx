import React from 'react';
import Heading from './Heading.jsx';
import NewList from './NewList.jsx';

const News = () => {
    return(
        <div className='news'>
            <Heading content='NEWS' />
            <NewList />
            {/* <Link to="/login">Login &#62;&#62;</Link> */}
        </div>
        
    );
};

export default News;