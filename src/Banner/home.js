import React from 'react';
import Nav from '../Navbar/Nav';
import search from '../images/search.png';
import three_dot from '../images/three dot.png';
import homeImage from '../images/home-image.png';
import learn from '../images/learn.png';
import get from '../images/get.png';
import grow from '../images/grow.png';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './home.css';
function Home() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <>
       <Nav/>
        <div className="home">
        <div className="container ">
            <div className="row">
                <div className="col-md-6">
                    <h4>Learn. Experience. Explore </h4>
                    <p>Pondith - Online Learners’ is an online platform where you can take every kind of Skills, Education and Study related programmer where you can take best courses from our expert instructor.</p>
                    <div className="row">
                        <button className="read-btn">Read More</button>
                        <button className="watch-btn">Watch More</button>
                    </div>
                    <div className="row">
                        <div className="learn">
                            <img className="learn-img " src={learn}/>
                            <p>Learn by watching</p>
                            <h6>We offer free and premium videos
that help learners that help them to
learn what they are looking for.</h6>
                        </div>
                        <div className="learn">
                            <img className="learn-img " src={get}/>
                            <p>Get A Community</p>
                            <h6>We offer free and premium videos
                            that help learners that help them to
                            learn what they are looking for.</h6>
                        </div>
                        <div className="learn">
                            <img className="learn-img " src={grow}/>
                            <p>Grow Your Skill</p>
                            <h6>We offer free and premium videos
                            that help learners that help them to
                            learn what they are looking for.</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div  className="search-home">
                    <img className="search-icon" src={search}/>
                    <input className="search-input" type="text" placeholder="What are you looking for?"/>
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
               <div className="homeImage">
                   <img className="home-image" src={homeImage}/>
               </div>
               </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home;
