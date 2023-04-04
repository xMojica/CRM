import React, { useState } from 'react';
import mock from '../../mock.json';
import Search from './Search';

function Buscador() {
    const [cedula, setCedula] = useState('');

    validar()

    function buscar(){
        const persona = mock.find((p) => p.Id === cedula);
        return persona
    }

    function validar() {
        const regex = /^\d{1,10}$/;
        if (regex.test(cedula)) {
            console.log('La entrada ' + cedula + ' es válida');
            const personaencontrada = buscar()
            if(personaencontrada !== undefined){
                return true
            }
        } else {
            console.log('La entrada ' + cedula + ' no es válida');
            return false
        }
    }

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
            {validar() === true ? <Search param={cedula}/> : null}

            
        </>
    );
}

export default Buscador;
