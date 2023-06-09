import "./App.css";
import Login from "./pages/Login";
import React, { useState } from "react";
import {  Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import NewBook from "./Components/NewBook";
import Register from "./pages/Register";
import Book from "./Components/Book";

import Categories from "./pages/Categories";
import Booklist from "./Components/Booklist";
import ResetPassword from "./pages/ResetPassword";



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
        <Route path="/" element={token ? <Home token={token} /> : <Login setToken={setToken} />} />
        <Route path="/newbooks" element={token ? <NewBook token={token} /> : <Login setToken={setToken} />} />
        <Route path="/categories" element={token ? <Categories token={token} /> : <Login setToken={setToken} />} />
        <Route path="/books" element={token ? <Book token={token} /> : <Login setToken={setToken} />} />
        <Route path="/booklist" element={token ? <Booklist token={token} /> : <Login setToken={setToken} />} />
        <Route path="/resetpassword" element={<ResetPassword />}/>

      </Routes>
     
      </main>
      </Router>
   
    
   </>
  );
}

export default App;
