import React from "react";
import "../../../Styles/Cases/Support/Support.css";
import Header from "../../../Components/Home/Header";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Support() {
  const cliente = JSON.parse(sessionStorage.getItem("cliente"));
  const history = useHistory();

  function enviar() {
    axios
      .patch(`https://sadimi-eoya.onrender.com/api/cases/${cliente.document}`, {
        description: `We have sent a specialized technician to the address ${cliente.address} on the day of the visit we will call you at your phone number ${cliente.contact}.`,
        type: "Support",
      })
      .then(() => {
        history.push("/Data");
      })
      .catch(() => {});
  }

  return (
    <>
      <Header atri={"cases"} />
      <div className="containerSup">
        <h1 id="h1">{cliente.name}</h1>
        <p className="p">
          Don't worry, we have sent a specialized technician to the address "
          <strong>{cliente.address}</strong>" on the day of the visit we will
          call you at your phone number "<strong>{cliente.contact}</strong>".
        </p>
        <p className="p">Thank you for using our services</p>
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
          <button className="boton" onClick={enviar}>
            Accept
          </button>
        </div>
      </div>
    </>
  );
}

export default Support;
