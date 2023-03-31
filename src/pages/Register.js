import React, { useState } from 'react';
import axios from 'axios';


const Register = ({ setToken }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/users/register`, {
        name,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="section pt-0">
    <div className="container pt-0">
      <div className="row full-height justify-content-center pt-0">
        <div className="col-12 text-center align-self-center py-5 pt-0">
          <div className="section pb-0 pt-0 pt-sm-0 text-center pt-0">

            <div className="card-3d-wrap mx-auto pt-0">
              <div className="card-3d-wrapper">

                <div className="card-front">
                  <div className="center-wrap">
                    <form className="section text-center pt-0" onSubmit={handleSubmit}>
                      <h4 className="mb-3 pb-3">Sign Up</h4>

                      <div className="form-group mt-2">
                        <input
                          type="text"
                          className="form-style"
                          id="username"
                          placeholder="Username"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <i className="input-icon bi bi-person-fill-add"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="email"
                          className="form-style"
                          id="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} required
                        />
                        <i className=" input-icon bi bi-envelope-at-fill"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          id="password"
                          className="form-style"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                       required
                        />
                        <i className=" input-icon bi bi-key-fill"></i>
                      </div>
                      <button
                      type="submit"
                        className="btn1 mt-4 btn btn-outline-info"
                      >
                        Register
                      </button>
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
};

export default Register;