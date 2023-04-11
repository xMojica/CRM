import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Forgot from './Components/Login/Forgot.jsx'
import Login from './Components/Login/Login.jsx';
import Data from './Components/Data/Data.jsx';
import Support from './Components/Cases/Support/Support';
import AddService from './Components/Cases/Add Service/AddService';
import TakeOff from './Components/Cases/TakeOff/TakeOff';
import PQRS from './Components/Cases/PQRS/Pqrs';
import Allcases from "./Components/Cases/Allcases/Allcases.jsx";
import Error from "./Components/Error/Error.jsx";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Forgot" component={Forgot} />
          <Route path="/Home" component={Home} />
          <Route path="/Data" component={Data} />
          <Route path="/Support" component={Support} />
          <Route path="/AddService" component={AddService} />
          <Route path="/TakeOff" component={TakeOff} />
          <Route path="/PQRS" component={PQRS} />
          <Route path="/AllCases" component={Allcases} />
          <Route path="/*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
