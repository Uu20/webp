import React from "react";
import "./App.css";
import img from "./sage.jpg";

const Card = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card">
        <img src={img} alt="img" style={{ width: "100%" }} />
        <h1>David</h1>
        <p className="title">ID &amp; B0829015</p>
        <p>CGU University</p>
        <p>B0829015@cgu.edu.tw</p>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <h1>  </h1>
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <p>
          <button>Contact</button>
        </p>
      </div>
    </div>
  );
};
export default Card;
