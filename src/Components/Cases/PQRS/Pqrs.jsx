import React from 'react'
import '../../../Styles/Cases/PQRS/Pqrs.css'
import Header from '../../../Components/Home/Header'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

function Pqrs() {
    const history = useHistory();

    function enviar() {
        let descriptionField = document.getElementById("description").value;
        let documento = JSON.parse(sessionStorage.getItem('cliente')).document;
 
        console.log(documento)
        axios.post(`https://sadimi-eoya.onrender.com/api/cases`,{
            document: documento,
            description: descriptionField,
            type:"PQRS"

        }) // en un objeto envio el descriptionField
            .then(response => {
                console.log(response.data)
            })
            .catch(() => {

            });
    }

    return (
        <>
            <Header atri={"cases"} />
            <div className='containerSup'>
                <h2 id='h1'>Formulario PQRS</h2>
                <div>
                    <textarea name="description" id="description" placeholder="Ingrese su descripción" required></textarea>
                </div>
                <div id='divBotones'>
                    <button className='boton' id='botonBack' onClick={() => { history.push('/Data') }}>Back</button>
                    <button className='boton' onClick={enviar}>Send</button>
                </div>


            </div>

        </>
    )
}

export default Pqrs