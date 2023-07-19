import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let x = 10;
  const [y, setY] = useState("0");
  const ref = useRef(0);
  console.log(ref);
  let i;
  useEffect(() => {
    i = setInterval(() => {
      console.log("Namasthe React", Math.random());
      console.log("i=", i);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  /**
   * ref not like
   * ref=0;
   * ref is come like a object
   * ref={current:initial valaue }===> ref={current=0}
   *
   *
   * **/
  return (
    <div className="m-4 p-4 w-96 h-96 border border-black  bg-slate-500">
      Demo2
      <div>
        <span className="font-bold text-2xl text-white">value of x : {x}</span>
        <button
          className="m-4 p-2 bg-green-800"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Click +
        </button>

        <span className="font-bold text-2xl text-white">value state : {y}</span>

        <button
          className="m-4 p-2 bg-green-800"
          onClick={() => {
            setY(parseInt(y) + 1);
            console.log("y=", y);
          }}
        >
          Increase Y
        </button>

        <span className="font-bold text-2xl text-white">
          Ref =: {ref.current}
        </span>

        <button
          className="m-4 p-2 bg-green-800"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Ref +
        </button>

        <button
          className="m-4 p-2 bg-red-800"
          onClick={() => {
            clearInterval(i);
          }}
        >
          Clear Interval
        </button>
      </div>
    </div>
  );
};

export default Demo2;
