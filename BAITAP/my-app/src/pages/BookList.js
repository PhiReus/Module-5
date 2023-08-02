import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookModel from "../models/BookModel";
import { useDispatch } from "react-redux";
import { addBook, deleteBook } from "../store/slices/bookSlice";
function BookList(props) {
  const dispatch = useDispatch();


  const handleAdd= (book) =>{
    dispatch(addBook(book));
  }
  const handleDelete= (id) =>{
    dispatch(deleteBook(id));
  }
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookModel.all()
      .then((res) => {
        setBooks(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div>
      <h1>BookList</h1>
        <Link to="/books/create">Add</Link>
      <table border={1} width={600}>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <th>{book.id}</th>
            <th>{book.name}</th>
            <th>{book.email}</th>
            <th>
              <Link to={"/books/" + book.id + "/edit"}>Edit</Link>
              <Link to={"books/" + book.id + "/delete"}>Delete</Link>
              <Link to={"books/" + book.id}>See</Link>
              <button onClick={()=>handleAdd(book)}>add</button>
              <button onClick={()=>handleDelete(id)}>delete</button>
            </th>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
