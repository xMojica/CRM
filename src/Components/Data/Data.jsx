import React from 'react';
import '../../Styles/Data/Data.css'
import Header from '../Home/Header';
import Aside from './Aside'
const Data = () => {
    
    return (
        <>
            <Header atri={"data"}/>
            <div className="contenedorMain">
                <Aside />
                <div className="container">
                    <div className="card">
                        <Link to="/Support"><div className="card2">Support</div></Link>
                    </div>
                    <div className="card">
                        <div className="card2">Add service</div>
                    </div>
                    <div className="card">
                        <div className="card2">Take off</div>
                    </div>
                    <div className="card">
                        <div className="card2">PQRS</div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Data;
