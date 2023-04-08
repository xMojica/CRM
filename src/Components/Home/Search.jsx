import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

function Search(props) {
    const history = useHistory();

    function error(){
        document.getElementById('mensajeDocument').style.display = 'block';
        document.getElementById('mensajeDocument').classList.add('animacion');
        setTimeout(function () {
            document.getElementById('mensajeDocument').style.display = 'none';
        }, 4000);
    }

    function buscar() {
        console.log(props.cedula)
            axios.get(`https://sadimi-eoya.onrender.com/api/user/${props.cedula}`)
            .then(response => {
                if (response.data.document === props.cedula) {
                    sessionStorage.setItem("cliente", JSON.stringify(response.data));
                    pasar();
                } else {
                    error();
                }

            })
            .catch(()=>{
                error()
            });
       
        
    }

    function pasar() {
        history.push('/data');
    }

    return (
        <div id='div_search'>
            <button id='search' onClick={buscar}>Search</button>
        </div>
    )
}

export default Search
