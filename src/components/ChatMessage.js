import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div className="flex mb-3">
        <img
          className="h-5"
          src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
          alt="user"
        />
        <span className="font-bold px-4">{name}</span>
        <div>
          <span>{message}</span>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
