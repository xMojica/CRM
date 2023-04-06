import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Data from './Components/Data/Data.jsx';
import Cases from "./Components/Cases/Cases.jsx";
import Error from "./Components/Error/Error.jsx";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/Data" component={Data} />
          <Route path="/Cases" component={Cases} />
          <Route path="/*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
