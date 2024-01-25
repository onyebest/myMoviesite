import React, { useState, useEffect } from "react";
import "./Home.scss";
import Navbar from "../../component/NavBar/Navbar";
import Featured from "../../component/Featured/Featured";
import List from "../../component/List/List";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTY4Y2E5Y2MyNDk5ZGE4NjExNDBiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDM2NTMzNSwiZXhwIjoxNzA0Nzk3MzM1fQ.wTWoKXNCnEZi0mDmvHmsA1M8winCLygwcjgYb-yfAjg",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
