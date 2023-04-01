import axios from "axios";
import React, { useState, useEffect } from "react";

function NewBook({ token }) {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [categories, setCategories] = useState([]);
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

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="section pt-0">
      <div className="container pt-0">
        <div className="row full-height  pt-0 ms-5">
          <div className="col-12  py-5 pt-0 ms-5">
            <div className="section pb-0 pt-0 pt-sm-0  pt-0 ms-5">
              <div className="card-3d-wrap mx-auto pt-0 ms-5">
                <div className="card-3d-wrapper" style={{ width: "700px" }}>
                  <div className="card-front">
                    <div className="center-wrap ">
                    
                      <form onSubmit={handleSubmit} className="pt-2">
                      <h2 className="pt-3"><u>Create New Book</u></h2>
                        <div className="row pt-1">
                          <div className="col">
                            <label htmlFor="title" className="form-label">
                              Book Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Book Title"
                              id="title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </div>
                          
                          <div className="col">
                            <label htmlFor="author" className="form-label">
                              Book Author
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Book Author"
                              id="author"
                              value={author}
                              onChange={(e) => setAuthor(e.target.value)}
                            />
                          </div>
                        </div>
                        
                        <div className="row  pt-1">
                          <div className="col">
                            <label htmlFor="price" className="form-label">
                              Book Price
                            </label>
                            <input
                              type="decimal"
                              className="form-control"
                              placeholder="Book Price"
                              id="price"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="category" className="form-label">
                              Book Category
                            </label>
                            <select
                              className="form-control"
                              id="category"
                              value={category_id}
                              onChange={(e) => setCategory_id(e.target.value)}
                            >
                              <option value="">Select a category</option>
                              {categories.map((category) => (
                                <option value={category.id}>
                                  {category.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="row  pt-1">
                        <div className="col">
                          <label htmlFor="description" className="form-label">
                            Book Description
                          </label>
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Book Description"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        </div>

                       <div className="mb-4 ">
                       <button
                          type="submit"
                          className="btn1 mt-2 btn btn-outline-info mb-2"
                        >
                          Create Book
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
    </div>
  );
}

export default NewBook;
