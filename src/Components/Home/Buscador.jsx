import React, { useState, useRef } from 'react';
import Search from './Search';


function Buscador() {
    const [cedula, setCedula] = useState(0);
    const messageRef = useRef(null);

    function handleChange(event) {        
            setCedula(parseInt(event.target.value));
    }

    return (
        <>
            <div id='div_input_buscador'>
                <input
                    id='input_buscador'
                    onChange={handleChange}
                    placeholder='Document'
                    type='text'
                />
            </div>
            <Search cedula={cedula}/>
            
            <h4 ref={messageRef} id='mensajeDocument' style={{ display: "none" }}>User not found</h4>



        </>
    );
}

export default Buscador;
