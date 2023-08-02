import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const students = [
  {
    name: "Phi",
    age: "24",
    address: "Linh Chiểu"
  },
  {
    name: "Hiếu",
    age: "17",
    address: "Linh Chiểu"
  },
  {
    name: "Long",
    age: "15",
    address: "Cửa Tùng"
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    {students.map(student => (
      <tr>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.address}</td>
      </tr>
    ))}
  </div>
)

