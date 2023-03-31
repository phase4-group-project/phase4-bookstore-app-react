import axios from "axios";
import React, { useEffect, useState } from "react";

function Categories({ token }) {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/categories`,
        {
          name: name,
          description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCategories([...categories, response.data]);
      setName("");
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/categories/:id`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div></div>
      <div className="row">
        <div className="col-md-10 offset-md-1 pt-1 bg-dark">
          <nav className="navbar pt-0 bg-dark">
            <div className="container-fluid ms-5 ">
              <form class="row g-5" onSubmit={handleSubmit}>
                <div class="col pt-1 ms-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Category name"
                    aria-label="First name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="col pt-1">
                  <input
                    type="text"
                    class="form-control form-control-sm "
                    placeholder="Description"
                    aria-label="Last name"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="col d-flex pt-1">
                  <button className="btn btn-outline-info btn-sm" type="submit">
                    Add Category ➕
                  </button>
                </div>
              </form>
            </div>
          </nav>
          <div className="pt-2 ms-4">
            {categories.map((category) => (
              <div
                className="card ms-1 mb-1"
                style={{ width: "18rem" }}
                key={category.id}
              >
                <div className="card-body">
                  <h5 className="card-name" key={category.name}>
                    {category.name}
                  </h5>
                  <p className="card-text">{category.description}</p>

                  <button className="btn btn-primary btn-sm">
                    Edit Category
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={handleDelete}
                  >
                    Delete Category
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
