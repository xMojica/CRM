import React, { useState, useEffect } from 'react'
import '../../../Styles/Cases/Allcases/Allcases.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../../Home/Header';


function Allcases() {
    const [cases, setCases] = useState({});
    const history = useHistory();


    function enviarPDF() {
        const cliente = JSON.parse(sessionStorage.getItem("cliente"));
        axios
            .post(`https://sadimi-eoya.onrender.com/api/pdf/${cliente.document}`, {
                destinatario: "samojica08@gmail.com" // como prueba pero realmente aca va
                                                     // cliente.email que es el email del cliente
                                                     // Nota: Si quiere probarlo cambie el atributo destinatario
                                                     // y coloque su correo personal
            })
            .then((response) => {
                console.log("envio el PDF al correo");
                console.log(response.data);
            })
            .catch(() => {

            });


    }


    useEffect(() => {
        const cliente = JSON.parse(sessionStorage.getItem("cliente"));
        axios
            .get(`https://sadimi-eoya.onrender.com/api/cases/${cliente.document}`)
            .then((response) => {
                setCases(response.data)
            })
            .catch(() => {

            });
    }, []);

    return (
        <>
            <Header atri={"allcases"} />
            <div className="contenedorAll">
                <h2>Document: {cases.document}</h2>
                <br />
                <div className="case">
                    {cases.Array && cases.Array.map((i, index) => (
                        
                        <div key={index}>
                            <hr />
                            <h2>Description: {i.description}</h2>
                            <h2>Type: {i.type}</h2>
                            <h2>Date: {i.date}</h2>
                            
                        </div>
                        
                    ))}
                </div>
                <br />
                <div id="divBotones">
                    <button
                        className="boton"
                        id="botonBack"
                        onClick={() => {
                            history.push("/Data");
                        }}
                    >
                        Back
                    </button>
                    <button className="boton" onClick={enviarPDF}>
                        Accept
                    </button>
                </div>
            </div>
        </>
    );

}

export default Allcases;
