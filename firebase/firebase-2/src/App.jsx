import React, { useEffect, useRef, useState } from 'react'
import { Link, Routes, Route, Navigate } from 'react-router-dom'
import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Protected({ user, loading, children }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false);
  });

  return () => unsubscribe();
}, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route
          path='/dashboard'
          element={
            <Protected user={user} loading={loading}>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
};
function Home(){
  return (
    <>
    <header>
      <ul>
      <h1>Home Page</h1>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
      </ul>
    </header>
    <h1> Firebase project</h1>
    </>
  )
}
function Dashboard(){
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Welcome Youre logged in </p>
    </div>
  )
}
const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Logged in user:", userCredential.user);
        alert("Login successful ✅");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.code, error.message);

        if (error.code === "auth/user-not-found") {
          alert("User not found ❌");
        } else if (error.code === "auth/wrong-password") {
          alert("Wrong password ❌");
        } else {
          alert(error.message);
        }
      });
      
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          ref={emailRef}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User:", userCredential.user);
        alert("Registered successfully ✅");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Enter Email"
          ref={emailRef}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
          required
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default App
