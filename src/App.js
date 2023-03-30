import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import NewBook from "./Components/NewBook";

function App() {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  // Add a book item in state
    function handleAddBook(newBook) {
        setBooks([...books, newBook]);
      }

  


  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar user={user} setUser={setUser} />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path = "newbook" element = {<NewBook onAddBook = {handleAddBook}/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
