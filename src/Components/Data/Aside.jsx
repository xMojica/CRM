import React from 'react'
import AvatarHombre from '../../images/AvatarHombre-removebg-preview.png';
import AvatarMujer from "../../images/AvatarHombre-removebg-preview.png";
import AvatarNoBin from "../../images/AvatarNeutro-removebg-preview.png"

function Aside() { 
  let foto = "";
  const cliente = JSON.parse(sessionStorage.getItem("cliente"));
  
  if (cliente.gender === 'Female') {
    foto = AvatarMujer;
  } else if (cliente.gender === 'Male') {
    foto = AvatarHombre;
  } else {
    foto = AvatarNoBin;
  }



  return (
    <aside className="aside">
      <img src={foto} alt="Foto" width='100px' />
      <br />
      <h2>{cliente.name}</h2>
      <br />
      <div className="datos"><h2>{cliente.age}</h2></div>
      <div className="datos"><h2>{cliente.country}</h2></div>
      <div className="datos"><h2>{cliente.services}</h2></div>
      <div className="datos"><h2>{cliente.email}</h2></div>




    </aside>
  )
}

export default Aside