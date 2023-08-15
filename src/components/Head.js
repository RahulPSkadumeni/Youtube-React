import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  console.log("searchQuery", searchQuery);
  const searchCache = useSelector((store) => store.search);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  console.log("suggestion", suggestion);
  useEffect(() => {
    // cal search api for each search query change
    // prevent call if keypress< 200ms using debounce if 2 api call time <200ms decline api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
        dispatch(cacheResults);
      }
    }, 200);

    return () => {
      clearTimeout(timer); // will clear timer if click <200 so prevent api call by rest setTimout of api
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    console.log("search,query", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    let jsonData;
    try {
      jsonData = await data.json();

      //console.log("fetching");
      setSuggestion(jsonData[1]);
      dispatch(
        cacheResults({
          [searchQuery]: jsonData[1],
        })
      );
    } catch (error) {
      alert(`Error: ${error}`);
    } finally {
      console.log("done fetching");
    }
  };

  return (
    <div className="grid grid-cols-12 p-2 m-1 shadow-lg">
      <div className="flex col-span-1 items-center">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-8 cursor-pointer"
          src="https://cdn3.iconfinder.com/data/icons/minimal-website-ui-kit/100/ld_menu_closed-512.png"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-11 mx-2"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg.webp"
            alt="logo"
          />
        </a>
      </div>
      <div className=" flex col-span-10 mx-5 px-8 justify-center text-center">
        <div className="flex-col w-3/5">
          <div className="flex ">
            <input
              className=" w-4/5 p-2 border border-gray-400 rounded-l-full"
              type="text "
              value={searchQuery}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="  border border-gray-400 p-2 rounded-r-full"
              placeholder="Search"
            >
              🔍 Search
            </button>
          </div>
          {showSuggestion && suggestion && (
            <div className="fixed bg-white  w-[37rem] rounded-xl shadow-lg">
              <ul className=" ">
                {suggestion?.map((suggest) => (
                  <li
                    key={suggest.id}
                    // onClick={setSearchQuery(suggest)}
                    className="align-left px-5 py-2"
                  >
                    🔍{suggest}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex col-span-1 justify-end ">
        <img
          className="h-8"
          src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
