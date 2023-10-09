import React from "react";
import "../styles/Button.css";

export default function Button({ update }) {
  return (
    <div>
      <button onClick={update}>
        <i className="bx bx-cookie bx-tada bx-flip-horizontal"></i>
      </button>
    </div>
  );
}
