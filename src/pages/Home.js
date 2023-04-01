import React from 'react'
import NewBook from '../Components/NewBook'
import Booklist from '../Components/Booklist'

function Home({token}) {  




  return (
    <div>Home
     <NewBook token = {token} /> 
    <Booklist  token = {token} />
    </div>
  )
}



export default Home