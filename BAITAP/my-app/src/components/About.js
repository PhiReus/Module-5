import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          React Router là một thư viện định tuyến nhẹ, đầy đủ tính năng dành cho
          Thư viện JavaScript phản ứng
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
export default About;
