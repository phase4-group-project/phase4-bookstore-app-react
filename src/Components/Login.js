import React from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom'

function Login(onLogin) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault()
        fetch ("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:json.stringify({username, password})


        })
        .then((r)=>{
            if (r.ok) {
                r.json().then((user) => onLogin(user))
            }
            else {
                r.json().then((err) => setErrors(err.errors))  

            }
        })
    }
  
    return (
    <div>
        <form onSubmit={handleSubmit}>
      
        <label >Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
     
     
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
     
      
        <button  type="submit">
         
        </button>
     
      
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      
    </form>
    </div>
  )
}

export default Login