import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home.jsx'
import Login from "./Pages/Login.jsx";
import Usuario from "./Pages/Usuario.jsx";
import Cases from "./Pages/Cases.jsx";


function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/Home" Component={Home} />
        <Route path="/Usuario" component={Usuario} />
        <Route path="/Cases" component={Cases} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
