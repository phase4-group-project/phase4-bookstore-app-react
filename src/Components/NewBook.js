import React, { useState, useEffect } from "react";

function NewBook({ onAddBook }) {
  // :title, :description, :price, :author
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {}, []);

  function handleSubmitClick(e) {
    e.preventDefault();

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        author: author,
      }),
    })
      .then((r) => r.json())
      .then((newBook) => {
        onAddBook(newBook);
        setTitle("");
        setDescription("");
        setPrice("");
        setAuthor("");
      });
  }

  return (
    <div>
      NewBook
      <form className="add" onSubmit={handleSubmitClick}>
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
