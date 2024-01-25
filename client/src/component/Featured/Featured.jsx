import React, { useEffect, useState } from "react";
import "./Featured.scss";

//ICONS
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import axios from "axios";

const Featured = (type) => {
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTg0YzIyZTI4OWY3ZDgyYTA4MWFmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDQ3OTk5OSwiZXhwIjoxNzA0OTExOTk5fQ.CqxWgJjoUvDoFF5zVtb9W4r8CTDqqKNX7uIPx55Gd3c",
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, []);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">adventure</option>
            <option value="comedy">comedy</option>
            <option value="crime">crime</option>
            <option value="fantasy">fantasy</option>
            <option value="historical">historical</option>
            <option value="horror">horror</option>
            <option value="romance">romance</option>
            <option value="sci-fi">sci-fi</option>
            <option value="western">western</option>
            <option value="animation">animation</option>
            <option value="drama">drama</option>
            <option value="documentary">documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <FaPlay />
            <span>play</span>
          </button>
          <button className="more">
            <IoMdInformationCircleOutline />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
