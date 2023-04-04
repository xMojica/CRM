import React from 'react'
import avatar_mujer from "./../../images/AvatarMujer-removebg-preview.png";
import avatar_hombre from "./../../images/AvatarHombre-removebg-preview.png";
import avatar_neutro from "./../../images/AvatarNeutro-removebg-preview.png";



function Avatar_genero() {

  function avatar(genero) {
    
    if (genero === 'Female') {
      return avatar_mujer;
    } else if (genero === 'Male') {
      return avatar_hombre;
    } else {
      return avatar_neutro;
    }
  }

    return (
      <div id='div_avatar'>
        <img width='300px' className='avatar' src={avatar('Female')} alt="Avatar" />
      </div>
    )
  }

  export default Avatar_genero
