import React,{useState, useEffect} from 'react';
import fire from '../fire.js'

const auth=()=> {
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

    const handleLogout =()=>{
        fire.auth.signOut();
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
        <div>
            
        </div>
    )
}

export default auth
