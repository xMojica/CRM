import React, { useState, useEffect } from 'react'
import '../../../Styles/Cases/Allcases/Allcases.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../../Home/Header';


function Allcases() {
    const [cases, setCases] = useState({});
    const history = useHistory();

    useEffect(() => {
        const cliente = JSON.parse(sessionStorage.getItem("cliente"));

        axios
            .get(`https://sadimi-eoya.onrender.com/api/cases/${cliente.document}`)
            .then((response) => {
                console.log(response.data);
                setCases(response.data)
            })
            .catch(() => {

            });
    }, []);

    return (
        <>
        <Header atri={"allcases"}/>
            <div className="contenedorAll">
                <h2>Document: {cases.document}</h2>
                <br />
                <div className="case">
                    {cases.Array && cases.Array.map((i) => (
                        <>
                            <h2 key={i.id}>Description: {i.description}</h2>
                            <h2 key={i.id}>Type: {i.type}</h2>
                            <h2 key={i.id}>Date: {i.date}</h2>
                        </>
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

                </div>
            </div>
        </>
    )
}

export default Allcases;
