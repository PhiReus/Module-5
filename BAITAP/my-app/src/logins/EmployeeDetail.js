import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EmployeeDetail(props) {

  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    if (employees && employees[id]) {
        setEmployee(employees[id]);
    }
  }, [id]);

  return (
    <div>
      <h1>EmployeeDetail</h1>
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
            <td>{parseInt(id) + 1}</td>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/employee">Back</Link>
    </div>
  );
}

export default EmployeeDetail;
