import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Data from './Components/Data/Data.jsx';
import Support from './Components/Support/Support';
import AddService from './Components/Add Service/AddService';
import TakeOff from './Components/TakeOff/TakeOff';
import PQRS from './Components/PQRS/Pqrs';
import Error from "./Components/Error/Error.jsx";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/Data" component={Data} />
          <Route path="/Support" component={Support} />
          <Route path="/AddService" component={AddService} />
          <Route path="/TakeOff" component={TakeOff} />
          <Route path="/PQRS" component={PQRS} />
          <Route path="/*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
