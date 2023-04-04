import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Usuario from './Components/Usuario/Usuario.jsx';
import Cases from "./Components/Cases/Cases.jsx";



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
