import React from 'react';
 import Logo from '../../images/Logo.png'
import Form from './Form';

function Login() {

  return (
    <>
      <div className='divcontenedor'>
        <Form />
        <img src={Logo} alt="Logo" width="480px" />
      </div>
     


    </>

  )
}

export default Login
