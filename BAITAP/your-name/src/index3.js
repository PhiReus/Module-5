import React from "react";
import ReactDOM from "react-dom/client";

<div>
  <h1> Hello, World</h1>
  <h2>It is {new Date().toLocaleTimeString()}.</h2>
</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
  root.render(
    <div>
      <h1>Hello, world</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
};

setInterval(tick,1000);
