import React from 'react';

import './../../Styles/Home/Home.css'

import Header from './Header'
import Avatar from './Avatar'
import Buscador from './Buscador'

const Home = (props) => {

    function genero(){
        let genero = props.gender
        return genero 
    }

    return (
        <>
            <Header />
            <Avatar gender={genero()}/>
            <Buscador/>
        </>
    );
}

export default Home;
