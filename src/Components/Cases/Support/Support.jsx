import React from 'react'
import '../../../Styles/Cases/Support/Support.css'
import Header from '../../../Components/Home/Header'

function Support() {
    const cliente = JSON.parse(sessionStorage.getItem("cliente"));

  return (
    <>
    <Header atri={"cases"}/>
    <div className='containerSup'>
        <h1 id='h1'>{cliente.name}</h1>
        <p className='p'>Don't worry, we have sent a specialized technician to the address "<strong>{cliente.address}</strong>" on the day of the visit we will call you at your phone number "<strong>{cliente.contact}</strong>".</p>
        <br />
        <p className='p'>Thank you for using our services</p>
        
    </div>
    </>
  )
}

export default Support