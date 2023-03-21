import React from 'react'
import { useState } from 'react';

function Buscador() {
    const [cedula, setCedula] = useState("");

    function validar(e) {
        const regex = /^\d{1,10}$/;
        if (regex.test(cedula)) {
            return console.log("La entrada "+cedula+" es válida");
        } else {
            return console.log("La entrada "+cedula+" no es válida");
        }
    }
    validar()

    return (
        <div id='div_input_buscador'>
            <input id='input_buscador' onChange={() => setCedula(document.getElementById('input_buscador').value) } placeholder='Document' type="text"></input> 
        </div>
    )
    
}

export default Buscador
