import React from 'react'
import foto from '../../images/AvatarMujer-removebg-preview.png'
import axios from 'axios';
import { useState } from 'react';


function Aside() {
  const [data, setData] = useState({});
  localStorage.setItem("cedulaCliente", "1037651321")
  const cedula = localStorage.getItem("cedulaCliente")
  axios.get(`https://sadimi-eoya.onrender.com/api/user/${cedula}`)
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      console.error(error);
    });



  return (
    <aside className="aside">
      <img src={foto} alt="Foto" width='100px' />
      <br />
      <h2>{data.name}</h2>
      <br />
      <div className="datos"><h2>{data.age}</h2></div>
      <div className="datos"><h2>{data.country}</h2></div>
      <div className="datos"><h2>{data.services}</h2></div>
      <div className="datos"><h2>{data.email}</h2></div>




    </aside>
  )
}

export default Aside