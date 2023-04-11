import React from "react";
import "../../../Styles/Cases/Add Service/AddService.css";
import Header from "../../../Components/Home/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddService() {
  const history = useHistory();
  // declarar variables al principio del archivo
  let xbox = false;
  let computer = false;
  let license = false;
  const cliente = JSON.parse(sessionStorage.getItem("cliente"));
  const array = cliente.userId.services;

  if (array.includes("Xbox")) {
    xbox = true;
  }

  if (array.includes("Computer")) {
    computer = true;
  }

  if (array.includes("License")) {
    license = true;
  }

  function comprar(item) {
    axios
      .patch(
        `https://sadimi-eoya.onrender.com/api/person/${cliente.document}`,
        {
          service: item,
        }
      ) // en un objeto envio el descriptionField
      .then((response) => {
        console.log(response.data);
        history.push('/Data')
      })
      .catch(() => {});
  }

  // mostrar tarjetas que no están en true
  return (
    <>
      <Header atri={"cases"} />

      <div className="contenedorMainAdd">
        <h1>Seleccione un servicio</h1>

        <div className="containerAdd">
          {!xbox && (
            <div onClick={() => comprar("Xbox")} className="cardAdd">
              Xbox
            </div>
          )}
          {!computer && (
            <div onClick={() => comprar("Computer")} className="cardAdd">
              Computer
            </div>
          )}
          {!license && (
            <div onClick={() => comprar("License")} className="cardAdd">
              License
            </div>
          )}
        </div>

        <div id="divBotonesAdd">
          <button
            className="botonAdd"
            id="botonBackAdd"
            onClick={() => {
              history.push("/Data");
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default AddService;
