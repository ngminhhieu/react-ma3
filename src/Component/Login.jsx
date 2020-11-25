import React from 'react';
import Heading from './Heading.jsx';
import LoginForm from './LoginForm.jsx';

const Login = () => {
    return(
        <div className='login'>
            <Heading content='LOGIN' />
            <LoginForm />
        </div>
        
    );
};

export default Login;