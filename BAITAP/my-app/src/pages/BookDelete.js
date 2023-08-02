import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BookModel from "../models/BookModel";

function BookDelete(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    BookModel.delete(id)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Lỗi khi xóa :", err);
      });
  };

  return (
    <div>
      <h1>BookDelete</h1>
      <button onClick={handleDelete}>Yes</button>
      <Link to="/">Back</Link>
    </div>
  );
}

export default BookDelete;
