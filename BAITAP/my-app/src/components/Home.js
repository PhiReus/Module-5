import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home1() {
  return (
    <>
      <main>
        <h2>Welcome to the Phi Reus!</h2>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default Home1;

