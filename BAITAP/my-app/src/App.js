import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import FormContact from "./components/FormContact";
import LoginValid from "./components/LoginValid";
import Phi from "./components/Phi";
import RegisterValid from "./components/RegisterValid";
// import Home from "./components/Home";
import About from "./components/About";
import BookList from "./pages/BookList";
import BookCreate from "./pages/BookCreate";
import BookEdit from "./pages/BookEdit";
import BookDelete from "./pages/BookDelete";
import BookShow from "./pages/BookShow";
import Category from "./components/Category";
import Product from "./components/Product";
import Employee from "./logins/Employee";
import Login from "./logins/Login";
import EmployeeDetail from "./logins/EmployeeDetail";

import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      {/* <RegisterValid/> */}
      {/* <Phi/> */}
      {/* <LoginValid/> */}
      {/* <FormContact/> */}
      {/* <Book/> */}
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About />} />
      </Routes> */}
      
        {/* <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/create" element={<BookCreate />} />
          <Route path="/books/:id/edit" element={<BookEdit />} />
          <Route path="/books/:id/delete" element={<BookDelete />} />
          <Route path="books/:id" element={<BookShow />} />
        </Routes> */}
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      
      {/* <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product" element={<Product />} />
      </Routes> */}
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
      </Routes> */}
    </div>
  );
}

export default App;
