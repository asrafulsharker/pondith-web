import React from 'react';
import search from '../images/search.png';
import three_dot from '../images/three dot.png';
import homeImage from '../images/home-image.png';
import learn from '../images/learn.png';
import get from '../images/get.png';
import grow from '../images/grow.png';
import './home.css';
function home() {
    return (
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
                            <p>Learn by watching</p>
                            <h6>We offer free and premium videos
                            that help learners that help them to
                            learn what they are looking for.</h6>
                        </div>
                        <div className="learn">
                            <img className="learn-img " src={grow}/>
                            <p>Learn by watching</p>
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
                    <img className="thrredot-icon" src={three_dot}/>
               </div>
               <div className="homeImage">
                   <img className="home-image" src={homeImage}/>
               </div>
               </div>
            </div>
        </div>
        </div>
    )
}

export default home;
