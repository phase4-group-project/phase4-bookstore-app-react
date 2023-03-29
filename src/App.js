import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import React, { useState, useEffect } from 'react';
import { Routes , Route } from "react-router-dom"


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch ("")
    .then((r)=>{
      if (r.ok) {r.json()
        .then((user)=> setUser(user))
      }
    })
   
  }, [])

  if (!user) return <Login onLogin = {setUser}/>
  


  return (
    <>   
    
      <main>
        <Routes>
            <Route path = "/login">
                
            
            </Route>
            <Route path= "/signup">
               
            </Route>
              
          </Routes>
      </main>
    </>
  );
}

export default App;
