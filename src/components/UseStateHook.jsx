import { useState } from 'react'
import React from 'react'

const UseStateHook = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
  
    const handleChange = () => {
      const nameRegex = /^[a-zA-Z]+$/;
      if (nameRegex.test(name)) {
        setMessage("Welcome");
      } else {
        setMessage("Name Incorrect.")
      }
    };
    return (
      <div className='h-screen w-screen bg-[#999999] flex flex-col justify-center items-center'>
        <label className='text-[#EEEEEE] text-lg ' htmlFor="name">Name:</label>
        <input className='m-5 rounded-md shadow-xl' type="text"
        onChange={(event) => setName(event.target.value)} />
        <div>{name}</div>
        <button onClick={() => handleChange(name)}  className='w-40 h-10 bg-[#626262] rounded-lg'>Validate Name</button>
        <div>{message}</div>
      </div>
    )
  }

export default UseStateHook
