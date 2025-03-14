import React from "react";
import Absolute from "../Absolutes/Absolute";
import "./notFound.css";
import { Link } from "react-router-dom";
import illustration from "../../assets/404-illustration.svg";
import back from "../../assets/return.svg";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <div>
        <img src={illustration} alt="404 illustraion image" />
      </div>
      <Link to={"/"} className="link flexs">
        <button className="back flexs">
          <img src={back} alt="Go back icon" />
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
