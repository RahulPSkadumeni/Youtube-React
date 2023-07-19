import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  console.log("chat", ChatMessages);
  console.log("licvee", liveMessage);
  useEffect(() => {
    const i = setInterval(() => {
      // API polling for live chat
      console.log("api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25) + "❤️",
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      {" "}
      <div className="ml-2 w-full h-[500px]  p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse ">
        {/* <div className="">liveChat</div>
      <div className=" "> */}
        {ChatMessages.length ? (
          <div>
            {ChatMessages.slice()
              .reverse()
              .map((c, i) => {
                return (
                  <ChatMessage key={i} name={c.name} message={c.message} />
                );
              })}
          </div>
        ) : null}
        {/* </div> */}
      </div>
      <form
        className="flex  w-full ml-2 p-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Rahul P S",
              message: liveMessage,
            })
          );
          setLiveMessage("");
          console.log("submitted>>>>>>>>>>>>>>>>>>>>>", liveMessage);
        }}
      >
        <input
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          type="text"
          className="w-10/12 h-10 bg-slate-100 border rounded-lg underline"
          placeholder="Chat..."
        />
        <button
          className="p-2 ml-4 rounded-lg  bg-green-600 "
          //   src="https://flyclipart.com/navigation-arrow-vector-illustration-arrow-vector-png-511237"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
