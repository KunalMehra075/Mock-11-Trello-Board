import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="FullHeight MainPage"
      style={{
        background: `url(./Images/vector.jpg)`,
      }}
    >
      <div className="IndexCard">
        <h1 className="PageHeads">Welcome to Trello Board</h1>
        <p>HomePage</p>
        <div className="flex">
          <Link to="/create"> Create A Notice</Link>
          <Link to="/view"> View all Notices</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
