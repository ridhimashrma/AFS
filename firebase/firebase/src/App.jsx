import React from 'react'
import Register from './Register'
import Login from './Login'
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'

const App = () => {
  onAuthStateChanged(auth, (user) => {

    if (user) {
      const uid=user.uid;
      const displayName=user.displayName;
      console.log("User ID:", uid);
      console.log("Display Name:", displayName);
    } else {
      console.log("No user is currently signed in.");
    }
  });
  function logoutHandler(){
    signOut(auth)
    .then(() => {
      console.log("User signed out successfully.");
    })
  }
  return (
    <div>
      <h1>Firebase registeration</h1>
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      <LoginWithGoogle></LoginWithGoogle>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

function LoginWithGoogle() {
  async function LoginWithGoogleHandler() {
    try
    {
      let provider = new GoogleAuthProvider();
      let userCredential = await signInWithPopup(auth, provider);
      console.log(userCredential.user)
    }
    catch (error){
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={LoginWithGoogleHandler}>Login with Google</button>
    </div>
  )
}

export default App