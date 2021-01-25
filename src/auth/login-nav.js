import React from 'react'
import {Link} from 'react-router-dom';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import logo from '../images/logo-w.png';
import search from '../images/search.png';
import three_dot from '../images/three dot.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './login.css';
function Login_nav() {


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };


    return (
        <div className="login-nav">
           <div className="container nav-top">
<Navbar  expand="lg">
  <Navbar.Brand href="#home"> <Link to="/"><img className="logo" src={logo}></img></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto ">

      <Nav.Link href="#link" style={{color:" #7A7777",marginRight:"5%",padding:"5px"}}>


      <div  className="search-nav">
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



      </Nav.Link>
    </Nav>
<button className="nav-btn login-nav-btn"><Link className="nav-a login-nav-a" to="/course-home">Go Premium</Link></button>
<button className="nav-btn login-nav-btn"><Link className="nav-a login-nav-a" to="/login">Sign In</Link></button>
<button className="nav-btn login-nav-btn"><Link className="nav-a login-nav-a" to="/register">Sign Up</Link></button>
  </Navbar.Collapse>
</Navbar>
</div>
        </div>
    )
}

export default Login_nav;
