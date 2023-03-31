import React from "react";

function Book({ token, book, onBookDelete }) {
  function handleDeleteClick() {
    fetch(`http://localhost:3000/books/${book.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    onBookDelete(book.id);
  }

  return (
    <li>
      <h4>Title: {book.title}</h4>
      <h5>Author: {book.author}</h5>
      <h5>{book.price}</h5>
      <button onClick={handleDeleteClick}>
        delete
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </li>
  );
}

export default Book;
