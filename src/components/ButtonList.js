import React from "react";
import Button from "./Button ";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Music",
    "Comedy",
    "News",
    "Song",
    "DJMix",
    "Lessons",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Valentines",
  ];
  return (
    <div className="flex ml-0">
      {list?.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
