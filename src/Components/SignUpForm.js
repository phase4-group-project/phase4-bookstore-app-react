import React from 'react'
import { useState } from 'react'

function SignUpForm(onLogin) {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e) {
      e.preventDefault()
      setIsLoading(true)
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          passwordConfirmation,

        })
      }).then((r)=> {
        setIsLoading(false)
        if (r.ok) {
          r.json(). then((user)=> onLogin(user))

         } 
        //  else {
          // r.json().then((err)=> setErrors(err.errors))
        //  }
      })
    }
  
  return (
    <form onSubmit={handleSubmit}>
    <label>Username</label>
    <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}

    />
    <label>Email</label>
    <input
      type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
    />
    <label>Password</label>
    <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"

    />
    <label>Password Confirmation</label>
    <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
    />
    <button type='submit'>
    {isLoading ? "Loading..." : "Sign Up"}
         
    </button>

    </form>
  )
}

export default SignUpForm