import React from 'react'
import { useState } from 'react'
import LoginForm from '../Components/LoginForm'
import SignUpForm from '../Components/SignUpForm'

//CHange state between login and signup form 
function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true)
  return (
    <>
        {showLogin ? (
            <>
            <LoginForm onLogin = {onLogin}/>
            <p>
                Dont have an account?
                <button onClick={()=> setShowLogin(false) }>
                    Sign Up
                </button>
            </p>
            </>
       ):(
        <>
            <SignUpForm onLogin = {onLogin}/>
            <p>
                Already have an account?
                <button onClick = {()=> setShowLogin(true)}>
                    Log In
                </button>
            </p>
        </>
        )}
    </>
  )
}

export default Login