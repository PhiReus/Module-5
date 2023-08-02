import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <div className="card">
      <div className="card--header" />
      <img
        className="avatar"
        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/342461343_144256941777958_8598440839323251972_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2e5j2gXDUmUAX9ktnEi&_nc_ht=scontent.fdad3-4.fna&oh=00_AfASOA5a8nNCWikyd3saBkMsgpSPxFXoGqDvdLiiO5ZqxA&oe=64B962B1"
        alt="avatar"
      />
      <div className="card--body">
        <div>
          <p className="text-header">Phi Reus</p>
          <p className="text-sub">
          <em>Silence is the end, only fools wait for something to end.</em>
          </p>
          <button className="btn third">FOLLOW</button>
        </div>
      </div>
    </div>
  </div>
);
