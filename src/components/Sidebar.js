import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="flex flex-col  p-5 shadow-lg w-48 h-screen">
      <ul className="grid grid-flow-row">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold grid grid-cols-12 pt-5">Subscriptions</h1>

      <ul className="grid grid-flow-row">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>

      <h1 className="grid font-bold ">Watch Later</h1>
      <ul className="grid grid-flow-row">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
    </div>
  );
};

export default Sidebar;
