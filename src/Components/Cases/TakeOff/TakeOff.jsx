import React from "react";
import "../../../Styles/Cases/TakeOff/TakeOff.css";
import Header from "../../../Components/Home/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";

function TakeOff() {
  const history = useHistory();
  const cliente = JSON.parse(sessionStorage.getItem("cliente"));

  function cancelar() {
    axios
      .patch(`https://sadimi-eoya.onrender.com/api/cases/${cliente.document}`, {
        description: '`The client ${cliente.name} wants to cancel the service ${cliente.userId.services[0]}`',
        type: "Take off",
      }) // en un objeto envio el descriptionField
      .then((response) => {
        console.log(response.data);
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
          Are you sure you want to cancel the service:{" "}
          <strong>{cliente.userId.services[0]}</strong> ?
        </p>
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
          <button className="boton" onClick={cancelar}>
            Accept
          </button>
        </div>
      </div>
    </>
  );
}

export default TakeOff;
