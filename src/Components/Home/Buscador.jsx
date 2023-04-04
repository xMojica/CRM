import React from 'react'
import { useState } from 'react';

import mock from '../../mock.json'

function Buscador() {
    const [cedula, setCedula] = useState("");

    function validar() {
        const regex = /^\d{1,10}$/;
        if (regex.test(cedula)) {

            mock.find((e) => {
                if (e.Id === cedula) {
                    console.log(e.Id)
                    console.log(e.Name)
                    console.log(e.Gender)
                    console.log(e.Email)
                }
                return false
            })

        } else {
            console.log("La entrada " + cedula + " no es válida");
        }
    }
    validar()

    return (
        <div id='div_input_buscador'>
            <input id='input_buscador' onChange={() => setCedula(document.getElementById('input_buscador').value)} placeholder='Document' type="text"></input>
        </div>
    )

}

export default Buscador
