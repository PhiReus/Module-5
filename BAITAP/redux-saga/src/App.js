import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<User />} />
          </Routes>    
    </div>
  );
}

export default App;
