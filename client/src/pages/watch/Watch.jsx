import React from "react";
import "./Watch.scss";
import { Link, useLocation } from "react-router-dom";

//ICON
import { FaArrowLeft } from "react-icons/fa";

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <FaArrowLeft />
          Home
        </div>
      </Link>
      <video src={movie} className="video" controls progress></video>
    </div>
  );
};

export default Watch;
