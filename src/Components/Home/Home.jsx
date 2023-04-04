import React from 'react';

import './../../Styles/Home/Home.css'

import Header from './Header'
import Avatar from './Avatar'
import Buscador from './Buscador'
import Search from './Search'



const Home = () => {
    return (
        <>
            <Header />
            <Avatar/>
            <Buscador/>
            <Search/>
        </>
    );
}

export default Home;
