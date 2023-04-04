import React, { useState } from 'react';
import mock from '../../mock.json';
import Search from './Search';

function Buscador() {
    const [cedula, setCedula] = useState('');

    function buscar() {
        const persona = mock.find((p) => p.Id === cedula);
        return persona;

    }

    function validar() {
        const regex = /^\d{1,10}$/;
        if (regex.test(cedula)) {
            console.log('La entrada ' + cedula + ' es válida');
            const personaEncontrada = buscar();
            console.log(personaEncontrada);

        } else {
            console.log('La entrada ' + cedula + ' no es válida');
            return false
        }
    }

    function handleChange(event) {
        setCedula(parseInt(event.target.value));
    }

    validar();
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
            <Search />
        </>
    );
}

export default Buscador;
