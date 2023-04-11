import React from "react";
import "../../../Styles/Cases/Add Service/AddService.css";
import Header from "../../../Components/Home/Header";
import { useHistory } from "react-router-dom";

function AddService() {
  const history = useHistory();
  // declarar variables al principio del archivo
let xbox = false;
let computer = false;
let license = false;

// establecer valores de variables
const array = JSON.parse(sessionStorage.getItem("cliente")).userId.services;
console.log(array);

if (array.includes("Xbox")) {
  xbox = true;
}

if (array.includes("Computer")) {
  computer = true;
}

if (array.includes("License")) {
  license = true;
}

// mostrar tarjetas que no están en true
return (
  <>
    <Header atri={"cases"} />

    <div className="contenedorMainAdd">
      <h1>Seleccione un servicio</h1>

      <div className="containerAdd">
        {!xbox && <div className="cardAdd">Xbox</div>}
        {!computer && <div className="cardAdd">Computer</div>}
        {!license && <div className="cardAdd">License</div>}
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
        <button className="botonAdd">Buy</button>
      </div>
    </div>
  </>
);

}

export default AddService;
