import React from "react";
import logo from "./../../images/logo.jpg";
import { useHistory } from "react-router-dom";
import "./../../Styles/Home/Header.css";

const Header = (props) => {
  const empleado = JSON.parse(sessionStorage.getItem("empleado"));
  const nombre = empleado.name;
  const history = useHistory();

  function pasarHome() {
    history.push("/home");
  }

  function pasarData() {
    history.push("/data");
  }

  function pasarAll(){
    history.push("/Allcases");
  }

  function logOut() {
    history.push("/");
  }

  return (
    <header>
      <img id="logo" src={logo} alt="Logo" width="100px" />
      <nav>
        <ul>
          {props.atri === "home" ? (
            <>
              <li className="li_2" id="home">
                Home
              </li>
              <li className="li_1" id="data" disabled>
                Data
              </li>
              <li className="li_1" id="cases" disabled>
                Cases
              </li>
              <li className="li_1" id="all-cases">
                AllCases
              </li>
              <li className="li_2 profile" id="nom">
                {nombre}
              </li>
              <li onClick={logOut} className="li_1 profile" id="profile">
                Log out
              </li>
            </>
          ) : (
            <>
              {props.atri === "data" ? (
                <>
                  <li onClick={pasarHome} className="li_1" id="home">
                    Home
                  </li>
                  <li className="li_2" id="data">
                    Data
                  </li>
                  <li className="li_1" id="cases" disabled>
                    Cases
                  </li>
                  {props.atri === "data" || props.atri === "cases" ? (
                    <li className="li_1" id="all-case" onClick={pasarAll}>
                      AllCases
                    </li>
                  ) : null}
                  <li className="li_2 profile" id="nom">
                    {nombre}
                  </li>
                  <li onClick={logOut} className="li_1 profile" id="profile">
                    Log out
                  </li>
                </>
              ) : (
                <>
                  <li onClick={pasarHome} className="li_1" id="home">
                    Home
                  </li>
                  <li onClick={pasarData} className="li_1" id="data">
                    Data
                  </li>
                  <li className="li_2" id="cases">
                    Cases
                  </li>
                  {props.atri === "data" || props.atri === "cases" ? (
                    <li className="li_1" id="all-cases" onClick={pasarAll}>
                      AllCases
                    </li>
                  ) : null}
                  <li className="li_2 profile" id="nom">
                    {nombre}
                  </li>
                  <li onClick={logOut} className="li_1 profile" id="profile">
                    Log out
                  </li>
                </>
              )}
            </>
          )}

        </ul>
      </nav>
    </header>
  );
};

export default Header;
