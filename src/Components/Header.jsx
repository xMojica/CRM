import React from 'react';
import logo from './../images/logo.jpg'
const Header = () => {
    // 

    function change(atri) {
        
        const select = document.getElementById(atri);
        
        if (select.getAttribute('class') === 'li_1') {
            select.setAttribute('class', 'li_2')
        } else {
            select.setAttribute('class', 'li_1')
        }
    }


    return (
        <header>
            <img id='logo' src={logo} alt="Logo" width="100px" />
            <nav>
                <ul>
                    <li onClick={(e) => { change("home") }} className='li_2' id='home'>Home</li>
                    <li onClick={(e) => { change("data") }} className='li_1' id='data'>Data</li>
                    <li onClick={(e) => { change("cases") }} className='li_1' id='cases'>Cases</li>
                    <li onClick={(e) => { change("profile") }} className='li_1' id='profile'>Profile</li>

                </ul>
            </nav>
        </header >
    );

}

export default Header;
