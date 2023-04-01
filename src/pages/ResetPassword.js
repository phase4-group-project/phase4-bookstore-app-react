import { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetToken, setResetToken] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const token = localStorage.getItem('token');

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/reset_password', { email });
      setResetToken(response.data.reset_password_token);
      setSuccessMessage(null);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.response.data.error);
      setSuccessMessage(null);
    }
  };

  const handleSetNewPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/update_password/${resetToken}`, {
        password: newPassword,
        password_confirmation: confirmPassword
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setSuccessMessage(response.data.message);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.response.data.error);
      setSuccessMessage(null);
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
                <div className="card-front" style={{height: "300px"}} >
                  <div className="center-wrap">
      <h2>Reset Password</h2>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {!resetToken ? (
        <form onSubmit={handleResetPassword}>
          <div className="form-group">
           
            <input
            className="form-style"
              type="email"
              id="email"
              placeholder='Enter Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <i className="input-icon bi bi-person-fill-add"></i>
          </div>
          <button className="btn1 mt-4 btn btn-outline-info" type="submit">Reset Password</button>
        </form>
      ) : (
        <form onSubmit={handleSetNewPassword}>
         <div className="form-group">
           
            <input
              type="password"
              className="form-style"
              placeholder='New Password'
              id="newPassword"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
             <i className="input-icon bi bi-key-fill"></i>
          </div>
          <div className="form-group pt-3">
            
            <input
              type="password"
              className="form-style pt-"
              placeholder='Confirm Password'
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
             <i className=" input-icon bi bi-key-fill pt-3"></i>
          </div>
          <button className="btn1 mt-4 btn btn-outline-info" type="submit">Set New Password</button>
        </form>
      )}
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

export default ResetPassword;
