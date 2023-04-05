import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Usuario from './Components/Usuario/Usuario.jsx';
import Cases from "./Components/Cases/Cases.jsx";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Home/:id" component={Home} />
          <Route path="/Usuario" component={Usuario} />
          <Route path="/Cases" component={Cases} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
