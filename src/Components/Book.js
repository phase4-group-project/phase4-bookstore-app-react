import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookList = ({ token }) => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [editingBook, setEditingBook] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingDescription, setEditingDescription] = useState("");
  const [editingAuthor, setEditingAuthor] = useState("");
  const [editingPrice, setEditingPrice] = useState("");
  const [editingCategory_id, setEditingCategory_id] = useState("");

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
          category_id: category_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBooks([...books, response.data]);
      setTitle("");
      setDescription("");
      setAuthor("");
      setPrice("");
      setCategory_id("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (bookId) => {
    try {
      // Send DELETE request to server to delete book from database
      await axios.delete(`http://localhost:3000/books/${bookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove book from list of books in component state
      setBooks(books.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);

    setEditingTitle(book.title);
    setEditingDescription(book.description);
    setEditingAuthor(book.author);
    setEditingPrice(book.price);
    setEditingCategory_id(book.category_id);
    console.log("editingBook:", editingBook);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/books/${editingBook.id}`,
        {
          title: editingTitle,
          description: editingDescription,
          author: editingAuthor,
          price: editingPrice,
          category_id: editingCategory_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedBook = response.data;
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === updatedBook.id ? { ...updatedBook, editing: false } : book
        )
      );
      setEditingBook(null);
      setEditingTitle("");
      setEditingDescription("");
      setEditingAuthor("");
      setEditingPrice("");
      setEditingCategory_id("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="containe ms-0" style={{ textAlign: "center" }}>
      <div className="row">
        <div className="col-md-12 bg-dark pt-1">
          <nav className="navbar pt-0 heads">
            <div className="container-fluid ">
              <h2>BOOK DETAILS</h2>
              <div className="d-flex mb-2">
                <Link to="/login">
                  <button
                    className="btn btn-outline-info btn-sm"
                    href="/addbook"
                    type="submit"
                  >
                    Add Book ➕
                  </button>
                </Link>
              </div>
            </div>
          </nav>
          <div className="pt-2 ms-4">
            {books.map((book) => (
              <div
                className="card ms-1 mb-1"
                style={{ width: "15rem", height: "14.2rem" }}
                key={book.id}
              >
                <div className="card-body pt-1">
                  <h5 className="card-title" key={book.title}>
                    {book.title}
                  </h5>
                  <p className="card-text pt-0">{book.description}</p>
                  <p className="card-text pt-0">{book.price}</p>
                  <p className="card-text pt-0">{book.author}</p>
                </div>
                <div className="mb-1">
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    class="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleEdit(book)}
                  >
                    Edit Book
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete 🗑
                  </button>
                </div>
              </div>
            ))}

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Edit Book
                    </h1>

                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={handleUpdate}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Title"
                          aria-label="Title"
                          value={editingTitle}
                          onChange={(e) => setEditingTitle(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Description"
                          aria-label="Description"
                          value={editingDescription}
                          onChange={(e) =>
                            setEditingDescription(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Author"
                          aria-label="Author"
                          value={editingAuthor}
                          onChange={(e) => setEditingAuthor(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="decimal"
                          className="form-control form-control-sm"
                          placeholder="Price"
                          aria-label="Price"
                          value={editingPrice}
                          onChange={(e) => setEditingPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="decimal"
                          className="form-control form-control-sm"
                          placeholder="Price"
                          aria-label="Price"
                          value={editingCategory_id}
                          onChange={(e) =>
                            setEditingCategory_id(e.target.value)
                          }
                        />
                      </div>

                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          onSubmit={handleUpdate}
                          className="btn btn-primary"
                        >
                          Save changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;

// import React from "react";

// function Book({ token, book, onBookDelete }) {
//   function handleDeleteClick() {
//     fetch(`http://localhost:3000/books/${book.id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     onBookDelete(book.id);
//   }

//   return (
//     <li>
//       <h4>Title: {book.title}</h4>
//       <h5>Author: {book.author}</h5>
//       <h5>{book.price}</h5>
//       <button onClick={handleDeleteClick}>
//         delete
//         <span role="img" aria-label="delete">
//           🗑
//         </span>
//       </button>
//     </li>
//   );
// }

// export default Book;
