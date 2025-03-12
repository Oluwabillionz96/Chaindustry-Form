import React from "react";
import Absolute from "../Absolutes/Absolute";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Absolute />
      <h1>Page Not Found</h1>
      <Link to={"/"}>
        <button className="back">Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
