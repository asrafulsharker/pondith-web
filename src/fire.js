import firebase from 'firebase'
 var firebaseConfig = {
    apiKey: "AIzaSyDAxbhA33nKLmE8Bd1kxV1GntXnl_KTopE",
    authDomain: "pondith-60ddc.firebaseapp.com",
    projectId: "pondith-60ddc",
    storageBucket: "pondith-60ddc.appspot.com",
    messagingSenderId: "461754768691",
    appId: "1:461754768691:web:776ad9968b53e697b23246"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;