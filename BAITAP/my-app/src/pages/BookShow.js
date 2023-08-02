import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BookModel from "../models/BookModel";

function BookShow(props) {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    BookModel.find(id)
    .then((res) => {
      setBook(res)
    })
    .catch((err) =>{
      console.err("lổi xảy ra : ",err)
    })
  }, [id]);

  return (
    <div>
      <h1>BookShow</h1>
      <table border={1} width={600}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr key={id}>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.email}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/">Back</Link>
    </div>
  );
}

export default BookShow;
