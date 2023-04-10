import React from 'react'
import '../../../Styles/Cases/Add Service/AddService.css'
import Header from '../../../Components/Home/Header'
import { useHistory } from 'react-router-dom'

function AddService() {
    const history = useHistory();

    function comprar() {



    }

    return (
        <>
            <Header atri={"cases"} />

            <div className="contenedorMainAdd">
                <h1>Seleccione un servicio</h1>
                <div className="containerAdd">
                    <div className="cardAdd">Xbox</div>
                    <div className="cardAdd">Computer</div>
                    <div className="cardAdd">License</div>
                </div>
                
                <div id='divBotonesAdd'>
                    <button className='botonAdd' id='botonBackAdd' onClick={() => { history.push('/Data') }}>Back</button>
                    <button className='botonAdd' onClick={comprar}>Buy</button>
                </div>
            </div>

        </>

    )
}

export default AddService