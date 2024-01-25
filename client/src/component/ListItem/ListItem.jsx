import React, { useState, useEffect } from "react";
import "./ListItem.scss";
import axios from "axios";

//ICON
import { FaPlay } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";

const ListItem = ( index, item ) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTg0YzIyZTI4OWY3ZDgyYTA4MWFmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDQ3OTk5OSwiZXhwIjoxNzA0OTExOTk5fQ.CqxWgJjoUvDoFF5zVtb9W4r8CTDqqKNX7uIPx55Gd3c",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
              <div className="icons">
                <FaPlay className="icon" />
                <IoIosAdd className="icon" />
                <BiLike className="icon" />
                <BiDislike className="icon" />
                <IoMdDownload className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="gerne">{movie.gerne}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
