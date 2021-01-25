import React,{useState} from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import logo from '../images/logo.png';
import arrow2 from '../images/arrow2.png';
import software from '../images/software.png';
import language from '../images/language.png';
import research from '../images/research.png';
import design from '../images/design.png';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import search from '../images/search.png';
import three_dot from '../images/three dot.png';

import "./course.css";






function BootstrapNavbar  (){    
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
        return(
            <>
            <div className="login-nav">
<div className="container nav-top ">
<Navbar  expand="lg">
  <Navbar.Brand href="#home"><img className="logo" src={logo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto col-md-4">
      <NavDropdown title="Course" className="nav-text course-nav-text" id="basic-nav-dropdown" style={{color:" #7A7777"}}>
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
      <Nav.Link href="#linkgrgr" style={{color:" #7A7777",marginRight:"5%",padding:"5px"}}>Skills</Nav.Link>
      <Nav.Link href="#link" style={{color:" #7A7777",marginRight:"",padding:"5px"}}>My Classes</Nav.Link>
    </Nav>
{/* <button className="nav-btn"><Link className="nav-a" to="/register">Start Learning</Link></button> */}
<div  className="search-nav col-md-4">
                    <img className="search-icon" src={search}/>
                    <input className="search-input login-search-input" type="text" placeholder="What are you looking for?"/>
                    <img onClick={handleClick}  className="thrredot-icon" src={three_dot}/>
                    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Bookmarks</MenuItem>
        <MenuItem onClick={handleClose}>Purchased history</MenuItem>
        <MenuItem onClick={handleClose}>Recent search</MenuItem>
        <MenuItem onClick={handleClose}>Mostly asked question</MenuItem>
      </Menu>
               </div>
  </Navbar.Collapse>
</Navbar>
</div>
  
            </div>
          </>
        )  
    }

export default BootstrapNavbar;