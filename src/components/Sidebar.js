import {
  Clock4,
  Flame,
  Home,
  Library,
  Music2,
  Newspaper,
  Radio,
  ThumbsUp,
  Trophy,
  Youtube,
} from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="flex flex-col  p-5 shadow-lg w-48 h-screen">
      <ul className="grid grid-flow-row">
        <Link to="/">
          <div className="flex space-x-2">
            <Home />
            <h1 className="my-1">Home</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <Library />
            <h1 className="my-1">Library</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <Youtube />
            <h1 className="my-1">Videos</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <Radio />
            <h1 className="my-1">Live</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <Clock4 />
            <h1 className="my-1">Watch Later</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="flex space-x-2">
            <ThumbsUp />
            <h1 className="my-1">Liked Videos</h1>
          </div>
        </Link>
      </ul>
      <h1 className="font-bold grid grid-cols-12 pt-5">Subscriptions</h1>

      <ul className="grid grid-flow-row">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>

      <h1 className="grid font-bold ">Watch Later</h1>
      <h1 className="font-bold my-2">Explore</h1>
      <Link to="/">
        <div className="flex space-x-2">
          <Flame />
          <h1 className="my-1">Trending</h1>
        </div>
      </Link>
      <Link to="/">
        <div className="flex space-x-2">
          <Music2 />
          <h1 className="my-1">Music</h1>
        </div>
      </Link>
      <Link to="/">
        <div className="flex space-x-2">
          <Newspaper />
          <h1 className="my-1">News</h1>
        </div>
      </Link>
      <Link to="/">
        <div className="flex space-x-2">
          <Trophy />
          <h1 className="my-1">Sports</h1>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
