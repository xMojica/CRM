import React from 'react';
import logo from './../../images/logo.jpg'
import { useHistory } from 'react-router-dom';
import './../../Styles/Home/Header.css'

const Header = (props) => { 
    const empleado = JSON.parse(sessionStorage.getItem("empleado"));
    const nombre = empleado.name;
    const history = useHistory();
    
    function pasar() {
        history.push('/home');
    }

    function logOut(){
        history.push('/')
    }
    
    
    return (
        <header>
            <img id='logo' src={logo} alt="Logo" width="100px" />
            <nav>
                <ul>
                    {props.atri === "home" ? (<li className='li_2' id='home'>Home</li>) : <li onClick={pasar} className='li_1' id='home'>Home</li>}
                    {props.atri === "data" ? (<li className='li_2' id='data'>Data</li>) : <li className='li_1' id='data'>Data</li>}
                    {props.atri === "cases" ? (<li className='li_2' id='cases'>Cases</li>) : <li className='li_1' id='cases'>Cases</li>}
                    {props.atri === "profile" ? (<li className='li_2' id='profile'>{nombre}</li>) : <li onClick={logOut} className='li_1' id='profile'>{nombre}</li>}

                </ul>
            </nav>
        </header >
    );
    

}

export default Header;
