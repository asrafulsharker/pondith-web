
import './App.css';
import {Switch , Route} from "react-router-dom";
import Home from "./Banner/home";
import Nav from './Navbar/Nav';
import login from './auth/login'
import reg from './auth/reg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
<>

<Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/login" exact component={login}/>
  <Route path="/register" exact component={reg}/>
</Switch>
</>
  )

  
}

export default App;
