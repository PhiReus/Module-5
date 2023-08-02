import React from "react";
import ReactDOM from "react-dom/client";

const name = "Phi Reus";
const yornname = React.createElement(
  "h1",
  { style: { textAlign: "center" } },
  name
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const students = ["Phi", "Hieu", "Long"];

function Hello(){
    return 'Phi';
}


root.render(
  <div>
    <h1>Xin chao {Hello()}</h1>
    <h2>Hello</h2>
    {students.map((student) => (
            <li><em>{student}</em></li>
          ))}
  </div>
);

