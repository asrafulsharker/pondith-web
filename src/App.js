import React,{useState, useEffect} from 'react'
import {Switch , Route} from "react-router-dom";
import Home from "./Banner/home";
import Nav from './Navbar/Nav';
import login from './auth/login'
import reg from './auth/reg';
import Course_home from './course/my_course';
import 'bootstrap/dist/css/bootstrap.min.css';
import nirob from './course/card';
import inistructor from './inistructor/ins'
function App() {

  return(
<>
<Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/login" exact component={login}/>
  <Route path="/register" exact component={reg}/>
  <Route path="/course-home" exact component={Course_home}/>
  <Route path="/inistructor" exact component={inistructor}/>
</Switch>
</>
  )

  
}

export default App;
