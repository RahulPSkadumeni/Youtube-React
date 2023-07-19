import React, { useEffect, useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [number, setNumber] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  console.log("rendering....");
  console.log(isDarkTheme);
  const prime = useMemo(() => {
    console.log("calculate prime", number);
    return findPrime(number);
  }, [number]);
  return (
    <div
      className={"m-4 p-4 w-96 h-96 border  " + (isDarkTheme && "bg-gray-800")}
    >
      <div>
        <button
          className="m10 p-2 border  bg-green-600"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          theme
        </button>
      </div>
      <input
        className="m-4 p-4 border border-black"
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />

      <h1>
        {number}th Prime :{prime}
      </h1>
    </div>
  );
};

export default Demo;
