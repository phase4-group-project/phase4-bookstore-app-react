// import React from 'react'
// import { useState, useEffect } from 'react'
// import NewBook from '../Components/NewBook'
// import Booklist from '../Components/Booklist'

// function Home() {  

//    const [books, setBooks] = useState([])

// // fetch list of books
//     useEffect(() => {
//         fetch("http://localhost:3000/books")
//         .then((r) => r.json())
//         .then((books) => (setBooks(books)))
//         console.log(books);

//     }, [])

// // Handle update book
// function handleUpdateBook(updatedBook) {
    
//   //  onUpdateBook(updatedBook);
//   }

    
// // Handle delete a book item in state
//     function handleDeleteBook(id) {
//         const updatedBooks = books.filter((book) =>
//         book.id !== id)
//         setBooks(updatedBooks)
//     }

// //  Add a book item in state
//     function handleAddBook(newBook) {
//         setBooks([...books, newBook]);
//       }

//   return (
//     <div>Home
//     {/* <NewBook onAddBook = {handleAddBook}/> */}
//     <Booklist  books = {books} onBookDelete = {handleDeleteBook}/>
//     </div>
//   )
// }



// export default Home