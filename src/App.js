
import './App.css';
import {Switch , Route} from "react-router-dom";
import Home from "./Banner/home";
import Nav from './Navbar/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
<>
<Nav/>
<Switch>
  <Route path="/" exact component={Home}/>
</Switch>
</>
  )

  
}

export default App;
