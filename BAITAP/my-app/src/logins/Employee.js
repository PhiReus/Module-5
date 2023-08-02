import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const employees = [
  {
    id: 1,
    name: "Hoa",
    age: 20,
  },
  {
    id: 2,
    name: "Khánh",
    age: 25,
  },
  {
    id: 3,
    name: "Tú",
    age: 22,
  },
];
function Employee(props) {
  return (
    <div>
      <h1>Welcom Bạn trẻ !</h1>
      <table border={1} width={500}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <Link to={"/employee/" + index}>See</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
