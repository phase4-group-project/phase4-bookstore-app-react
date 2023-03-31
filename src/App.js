import "./App.css";
import Login from "./pages/Login";
import React, { useState } from "react";
import {  Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import NewBook from "./Components/NewBook";
import Register from "./pages/Register";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
   <>
       <Router>
      <NavBar logout={logout} token={token} />
      <main>
  
      <Routes>
        <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Home token={token} />} />
        <Route path="/register" element={!token ? <Register setToken={setToken} /> : <Home token={token} />} />
        {/* <Route path="/" element={token ? <Home token={token} /> : <Login setToken={setToken} />} />
        <Route path="/books" element={token ? <NewBook token={token} /> : <Login setToken={setToken} />} /> */}
      </Routes>
     
      </main>
      </Router>
   
    
   </>
  );
}

export default App;
