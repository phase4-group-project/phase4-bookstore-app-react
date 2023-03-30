import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar({user, setUser}) {
    console.log(user.data);
    
    const username = user.data.username
    

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
    <h1>BOOKSTORE APP</h1>
    <h2> Hello, {username} </h2> 
    <NavLink to = "/"> <button>Home</button></NavLink>
    <NavLink to="newbook"><button>New Book</button> </NavLink>
    <button  onClick={handleDelete} >Logout</button>
    </nav>

  )
}

export default NavBar