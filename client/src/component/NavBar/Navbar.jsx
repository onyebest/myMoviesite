import React, { useState } from "react";
import "./Navbar.scss";

// Images
import Img from "../../Images/download.jpeg";
import Profile from "../../Images/profile.jpg";

// icons
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Img} alt="" />
          <Link to="/" className="link">
            {" "}
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
          <span>My Movies</span>
        </div>

        <div className="right">
          <FaSearch className="icon" />
          <span>KIDS</span>
          <IoIosNotifications className="icon" />
          <img src={Profile} alt="" />
          <div className="profile">
            <IoMdArrowDropdown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>LogOut</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
