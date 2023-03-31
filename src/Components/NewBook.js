import axios from "axios";
import React, { useState, useEffect } from "react";

function NewBook({ token }) {
     
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/books`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/books`,
        {
          title: title,
          description: description,
          author: author,
          price: price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBooks([...books, response.data]);
      setTitle('');
      setDescription('');
      setAuthor('');
      setPrice('');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      NewBook
      <form className="add" onSubmit={handleSubmit}>
      <label>Title : </label>
        <input
          type="text"
          value={title}
          placeholder="new.."
          onChange={(e) => setTitle(e.target.value)}
        />
        <labal>Description</labal>
        <input
          type="text"
          value={description}
          placeholder=")"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price</label>
        <input
          type="text"
          value={price}
          placeholder="KES"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Author</label>
        <input
          type="text"
          value={author}
          placeholder="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewBook;
