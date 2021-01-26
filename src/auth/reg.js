import React,{useState, useEffect} from 'react';
import fire from '../fire.js'
import Login_nav from './login-nav';
import Twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import google from '../images/google.png';
import line1 from '../images/Line1.png';
import Line2 from '../images/Line2.png';
import {Link} from 'react-router-dom';
import reg_img from '../images/reg-img.png';
function Reg() {


    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState('');

    const clearInputs = ()=>{
        setEmail('');
        setPassword('');
    }
    const clearErrors =()=>{
        setEmailError('');
        setPasswordError('');
    }


    const handleSignup =()=>{
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err)=>{
            switch (err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.massage);
                    break;
                case "auth/week-password":
                    setPasswordError(err.massage);
                    break;            
            }
        });
    }


    return (

        <>
        <Login_nav/>
        <div className="container">
            <div className="row">
                <div className="col-md-4 div-left-signup mr-auto">
                    <p className="left-top-text">Sign Up to continue your  <strong style={{color:"#FF4E23"}}>LEARNING</strong></p>
                    <div className="row ">
                        <div className="left-sm-box" style={{marginLeft:"60px"}}>
                            <img className="left-img"  src={google}/>
                            <p className="left-img-text">Continue with <br/> Google</p>
                        </div>
                        <div className="left-sm-box">
                            <img className="left-img" src={facebook}/>
                            <p className="left-img-text">Continue with <br/> Facebook</p>
                        </div>
                        <div className="left-sm-box">
                            <img className="left-img" src={Twitter}/>
                            <p className="left-img-text">Continue with <br/> Twitter</p>
                        </div>
                        
                    </div>
                    <div className="row line-1-div">
                        <img className="line1 m-auto" src={line1}/>
                        <p className="m-auto">or</p>
                        <img className="line1 m-auto" src={line1}/>
                    </div>
                    <div className="row ">
                        <input  className=" login-box login-box-input reg-box-input" style={{width:"48%"}}  type="text" placeholder="First Name"/>
                        <input  className=" login-box login-box-input reg-box-input ml-auto" style={{width:"48%"}}  type="Text" placeholder="Last Name"/>
                    </div>
                    <div className="row ">
                        <input  className=" login-box login-box-input reg-box-input" style={{width:"100%"}}  type="text" placeholder="username"/>
                    </div>
                    <div className="row ">
                        <input  className=" login-box login-box-input reg-box-input" autoFocus style={{width:"100%"}} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
                    </div>
                    <div className="row ">
                        <input  className=" login-box login-box-input reg-box-input" required value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"48%"}}  type="password" placeholder="Password"/>
                        <input  className=" login-box login-box-input reg-box-input ml-auto" style={{width:"48%"}}  type="password" placeholder="Confirm Password"/>
                        <p style={{fontSize:"10px",color:"red"}}>{emailError} {passwordError}</p>
                     
                            <>
                            <button style={{width:"100%"}} className=" login-box btn-submit" onClick={handleSignup} type="submit"><Link to="/course-home">Sign Up</Link></button>
                            </>
         
                        <p style={{fontSize:"10px",padding:"5px",paddingTop:"9px",textAlign:"center"}}>By signing up you agree to Pondith - Online Learners’ Terms of Service and Privacy Policy.
                        This page is protected by reCAPTCHA and is subject to Google's Terms of Service and Privacy Policy.</p>
                        
                    </div>
                    <p style={{textAlign:"center"}} className="dont ">Already have an Account? <Link className="signup-dont" to="/login">Sign In</Link> </p>
                    
                </div>
                
                <div className="col-md-5">
                    <img src={reg_img} className="reg-right-img"/>
                    <p style={{fontSize:"22px",color:"rgba(255, 78, 35, 1)",fontWeight:"700",textAlign:"center"}}>Learn. Experience. Explore </p>
                    <p style={{fontSize:"12px",textAlign:"center"}}>Pondith - Online Learners’ is an online platform where 
                    you can take every kind of Skills, Education and Study related programmer 
                    where you can take best courses from our expert instructor.</p>

                </div>
            </div>
        </div>
        </>

    )
}

export default Reg;
