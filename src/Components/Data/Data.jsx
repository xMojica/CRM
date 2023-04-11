import React from "react";
import { useHistory } from "react-router-dom";
import "../../Styles/Data/Data.css";
import Header from "../Home/Header";
import Aside from "./Aside";
const Data = () => {
  const history = useHistory();

  return (
    <>
      <Header atri={"data"} />
      <div className="contenedorMain">
        <Aside />
        <div className="container">
          <div className="card">
            <div
              className="card2"
              onClick={() => {
                history.push("/Support");
              }}
            >
              Support
            </div>
          </div>
          <div className="card">
            <div
              className="card2"
              onClick={() => {
                history.push("/AddService");
              }}
            >
              Add service
            </div>
          </div>
          <div className="card">
            <div
              className="card2"
              onClick={() => {
                history.push("/TakeOff");
              }}
            >
              Take off
            </div>
          </div>
          <div className="card">
            <div
              className="card2"
              onClick={() => {
                history.push("/PQRS");
              }}
            >
              PQRS
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
