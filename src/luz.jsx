import React from 'react';
import { useState } from 'react';


const Luz = ({ color, setLuzOn, luzOn }) => {
  const handleClick = () => {
    setLuzOn(color);
  };

  return (

  <div
      className={`luz ${color} ${luzOn === color ? 'encendida' : ''}`}
      onClick={handleClick}
    ></div>
  );
  
};

export default Luz;
