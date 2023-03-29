import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({user, setUser}) {
    console.log(user);

    function handleDelete(){
        fetch("http://localhost:3000/users/logout", {
            method: "DELETE"
        }).then((r)=> {
            if (r.ok) {
                setUser(null)
                
            }

        })
        
    }
  return (
    <nav>
    <h1>BOOKSTORE</h1>
    <h2>hello,  </h2>
    <h2></h2>
        <button>New Book</button>
        <button  onClick={handleDelete} >Logout</button>
    </nav>

  )
}

export default NavBar