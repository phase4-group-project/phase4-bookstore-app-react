import React from "react";

function EditBook() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/books`,
        {
          title: title,
          description: description,
          author: author,
          price: price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBooks([...books, response.data]);
      setTitle("");
      setDescription("");
      setAuthor("");
      setPrice("");
    } catch (error) {
      console.error(error);
    }
  };
  return <div>EditBook</div>;
}

export default EditBook;
