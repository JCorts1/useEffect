import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("The count is", count);
    return () => {
        console.log("I am being cleaned up!");
    }
  }, [count]);
  

  return (
    <div className="w-screen h-screen bg-[#999999] flex flex-col justify-center items-center">
      <div>
        <h1 className="text-2xl w-28 shadow-lg bg-[#EEEEEE] rounded-xl">
          Count: {count}
        </h1>
        <button
          onClick={() => setCount(count - 1)}
          className="w-40 h-8 text-[#EEEEEE] bg-[#323456] rounded-lg mr-4"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="w-40 h-8 text-[#EEEEEE] bg-[#323456] rounded-lg"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default UseEffectHook;
