import axios from "axios";
import React, { useEffect, useState } from "react";

function Categories({ token }) {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [editingCategory, setEditingCategory] = useState(null);
    const [editingName, setEditingName] = useState("");
    const [editingDescription, setEditingDescription] = useState("");
  
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
  
    const handleDelete = async (categoryId) => {
      try {
        // Send DELETE request to server to delete category from database
        await axios.delete(`http://localhost:3000/categories/${categoryId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        // Remove category from list of categories in component state
        setCategories(categories.filter((category) => category.id !== categoryId));
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleEdit = (category) => {
      setEditingCategory(category);
      console.log("editingCategory:", editingCategory);
      setEditingName(category.name);
      setEditingDescription(category.description);
    };
  
    const handleUpdate = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/categories/${editingCategory.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: editingName,
            description: editingDescription,
          }),
        });
        const data = await res.json();
        setCategories(
          categories.map((category) =>
            category.id === data.id ? { ...data, editing: false } : category
          )
        );
        setEditingCategory(null);
        setEditingName("");
        setEditingDescription("");
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

                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleEdit(category)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(category.id)}
                  >
                    Delete Category
                  </button>
                </div>
                {/* modal */}
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
                          Modal title
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
                              placeholder="Name"
                              aria-label="Name"
                              value={editingName} onChange={(e) => setEditingName(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              placeholder="Description"
                              aria-label="Description"
                              value={editingDescription} onChange={(e) => setEditingDescription(e.target.value)}
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
                            <button type="submit" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </form>
                        
                      </div>
                    </div>
                  </div>
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
