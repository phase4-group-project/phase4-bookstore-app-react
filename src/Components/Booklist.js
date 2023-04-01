import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';


function Booklist({token}) {
    
    
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
      (setBooks(response.data));
      console.log(response);
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

  // Handle delete a book item in state
  function handleDeleteBook(id) {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }

  return (
    <div>
    <ul>{books.map((book) => (
          <Book
            token = {token}
            key={book.id}
            book={book}
            onBookDelete={handleDeleteBook}
            // onBookUpdate={handleUpdateBook}
          />
        ))}</ul>
    </div>
  )
}

export default Booklist