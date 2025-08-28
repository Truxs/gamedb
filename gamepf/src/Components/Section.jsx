import React from "react";
import "./Section.css";

function Section({ title, children }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="card-container">{children}</div>
    </div>
  );
}

export default Section;
