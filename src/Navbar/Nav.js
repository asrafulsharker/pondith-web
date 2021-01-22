import React from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import logo from '../images/logo.png';
import arrow2 from '../images/arrow2.png';
import software from '../images/software.png';
import language from '../images/language.png';
import research from '../images/research.png';
import design from '../images/design.png';
import './nav.css';
class BootstrapNavbar extends React.Component{

    render(){
        return(
            <>
<div className="container nav-top">
<Navbar  expand="lg">
  <Navbar.Brand href="#home"><img className="logo" src={logo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto ">
      <NavDropdown title="Course" className="nav-text" id="basic-nav-dropdown" style={{color:" #7A7777"}}>
        <NavDropdown.Item href="#action/3.1">
        <div style={{borderBottom:"2px solid #B8AAAA"}} className="row">
                <div className="m-auto"><img style={{width:"40px"}} src={design}></img></div>
                <div className=""><p>Design & Multimedia</p> <p style={{fontSize:"7px"}}>Pondith is an online platform where you can 
                take every kind.</p></div>
                <div className="m-auto"><img  style={{width:"50px",borderRadius:"50%",background:"#FF4E23",height:"25px",width:"25px"}} src={arrow2}></img></div>
            </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
        <div style={{borderBottom:"2px solid #B8AAAA"}} className="row">
                <div className="m-auto"><img style={{width:"40px"}} src={software}></img></div>
                <div className=""><p>Software Development</p> <p style={{fontSize:"7px"}}>Pondith is an online platform where you can 
                take every kind.</p></div>
                <div className="m-auto"><img  style={{width:"50px",borderRadius:"50%",background:"#FF4E23",height:"25px",width:"25px"}} src={arrow2}></img></div>
            </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
        <div style={{borderBottom:"2px solid #B8AAAA"}} className="row">
                <div className="m-auto"><img style={{width:"40px"}} src={language}></img></div>
                <div className=""><p>Language & Linguistics</p> <p style={{fontSize:"7px"}}>Pondith is an online platform where you can 
                take every kind.</p></div>
                <div className="m-auto"><img  style={{width:"50px",borderRadius:"50%",background:"#FF4E23",height:"25px",width:"25px"}} src={arrow2}></img></div>
            </div>
        </NavDropdown.Item>
       
        <NavDropdown.Item href="#action/3.4">
            <div style={{borderBottom:"2px solid #B8AAAA"}} className="row">
                <div className="m-auto"><img style={{width:"40px"}} src={research}></img></div>
                <div className=""><p>Research & Journal</p> <p style={{fontSize:"7px"}}>Pondith is an online platform where you can 
                take every kind.</p></div>
                <div className="m-auto"><img  style={{width:"50px",borderRadius:"50%",background:"#FF4E23",height:"25px",width:"25px"}} src={arrow2}></img></div>
            </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">
            <div className="get">
                <h4 style={{color:"#F14F20"}}>GET it now!</h4>
                <p className="get-p" style={{fontSize:"7px",width:"70%"}}>Smart Psychologist is an online platform where you can 
                take every kind  </p>
                <p style={{fontSize:"7px",width:"70%"}}>of Mental Health treatment and take appointment 
from our experts.</p>
            </div>
        </NavDropdown.Item>
        <NavDropdown.Item>
            <button className="get-btn">Explore</button>
        </NavDropdown.Item>
        
      </NavDropdown>
      <Nav.Link href="#link" style={{color:" #7A7777",marginRight:"5%",padding:"5px"}}>Skills</Nav.Link>
    </Nav>
<button className="nav-btn">Start Learning</button>
  </Navbar.Collapse>
</Navbar>
</div>
            </>
        )  
    }
}

export default BootstrapNavbar;