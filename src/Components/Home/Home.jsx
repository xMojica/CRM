import React from 'react';
import { useParams } from "react-router-dom";
import mock from '../../mock.json'


import './../../Styles/Home/Home.css'

import Header from './Header'
import Avatar from './Avatar'
import Buscador from './Buscador'

const Home = () => {

    const { id } = useParams();

    function buscar(){
        const id2 = parseInt(id)
        const persona = mock.find((p) => p.id === id2);
        return persona;
    }

    return (
        <>
            <Header nombre={buscar().first_name}/>
            <Avatar genero={buscar().gender}/>
            <Buscador/>
        </>
    );
}

export default Home;
