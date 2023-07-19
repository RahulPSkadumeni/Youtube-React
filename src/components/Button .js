import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <div className="px-5 py-2 bg-gray-200 m-2 rounded-lg">{name}</div>
    </>
  );
};

export default Button;
