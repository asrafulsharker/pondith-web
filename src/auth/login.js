import React,{useState, useEffect} from 'react';
import fire from '../fire.js'
import Login_nav from './login-nav';
import Twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import google from '../images/google.png';
import line1 from '../images/Line1.png';
import Line2 from '../images/Line2.png';
import {Link} from 'react-router-dom';
import Ex from '../images/experience.png';
function Reg(props) {


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

    const handleLogin=()=>{
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err)=>{
            switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.massage);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.massage);
                    break;            
            }
        });

    }


    const authListener = ()=>{
        fire.auth().onAuthStateChanged(user =>{
            if(user){
                clearInputs();
                setUser(user);
            }else{
                setUser("");
            }
        })
    };

    useEffect(()=>{
        authListener();
   },[] )




    return (

        <>
        <Login_nav/>
        <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4 left-box-login">
                    <div>
                    <div className="row login-box">
                <img className="login-box-icon" src={google}/>
                        <p  className="login-box-text">Continue with Google</p>
                    </div>
                    <div className="row login-box">
                <img className="login-box-icon" src={facebook}/>
                        <p className="login-box-text">Continue with Facebook</p>
                    </div>
                    <div className="row login-box">
                <img className="login-box-icon" src={Twitter}/>
                        <p className="login-box-text">Continue with Twitter</p>
                    </div>
                    <div className="row line-1-div">
                        <img className="line1 m-auto" src={line1}/>
                        <p className="m-auto">or</p>
                        <img className="line1 m-auto" src={line1}/>
                    </div>
                    <form>
                    <div className="row ">
                        <input className=" login-box login-box-input" style={{width:"100%"}} name="email" value={email} onChange={(e)=> setEmail(e.target.value)}  type="email" placeholder="Email Address"/>
                    </div>
                        <div className="row ">
                        <input  className=" login-box login-box-input" style={{width:"100%"}}  type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
                    </div>
                    <div className="row m-auto">
                        <input className="checkmark" type="checkbox"/>
                        <p className="checkbox-text ">Keep me Sign In until I Sign out.</p>
                    </div>
                    <button style={{width:"100%"}} className=" login-box btn-submit" onclick={handleLogin} type="submit">Sign In</button>
                    <p className="forgot">Forgot Password?</p>
                    </form>
                    <p className="dont ">Don’t have an Account? <Link className="signup-dont" to="/register">Sign Up</Link> </p>
                    </div>
                </div>
                <div className="col-md-8 ">
                    <div className="mr-auto login-second-div">
                    <img className="login-img" src={Ex}/>
                    <p style={{paddingTop:"10px",fontSize:"25px",color:"rgba(105, 96, 96, 1)",fontWeight:"700"}}>Learn. Experience. Explore </p>
                    <img className="line1" src={Line2}/>
                    <p  style={{fontSize:"20px",color:" rgba(125, 121, 121, 1)"}}>Welcome Back to<br/>
                    <strong  style={{paddingTop:"10px",fontSize:"25px",color:" rgba(125, 121, 121, 1)",fontWeight:"700"}}>Pondith - Online Learners’</strong></p>
                    <img className="line1" src={Line2}/><br/>
                    <strong  style={{paddingTop:"10px",fontSize:"25px",fontWeight:"550"}}>Sign In to continue your <br/>
                    learning.</strong>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </>

    )
}

export default Reg;
