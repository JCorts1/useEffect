import React from "react";
import { useState, useEffect } from "react";

const LocationEffect = () => {
  const [name, setName] = useState("Insert your name");
  const [message, setMessage] = useState("Insert your name");
  const nameRegex = /^[a-zA-Z\s]*$/;

  useEffect(() => {
    if (nameRegex.test(name) || name.length == 0) {
      setMessage(" ");
    } else {
      document.getElementById("validity").style.color = "#FC4455";
      setMessage("Insert only letters");
    }
  }, [name]);

  return (
    <div className="w-scree h-screen bg-[#626262] flex flex-col justify-center items-center">
      <label className="text-[#EEEEEE] mb-2" htmlFor="text">
        Insert your name:
      </label>
      <input
        className="mt-1 rounded-lg"
        onChange={(event) => setName(event.target.value)}
        type="text"
      />
      <br />
      <div id="validity">{message}</div>
    </div>
  );
};

export default LocationEffect;
