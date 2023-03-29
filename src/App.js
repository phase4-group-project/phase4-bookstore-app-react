import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import React, { useState, useEffect } from 'react';
import { Routes , Route } from "react-router-dom"
import NavBar from './Components/NavBar';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch ("http://localhost:3000/me")
    .then((r)=>{
      if (r.ok) {r.json()
        .then((user)=> setUser(user))
      }
    })
   
  }, [])

  if (!user) return <Login onLogin = {setUser}/>
  


  return (
    <>   
      <NavBar user = {user} setUser = {setUser}/>
      <main>
       
      </main>
    </>
  );
}

export default App;
