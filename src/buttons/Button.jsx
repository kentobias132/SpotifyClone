import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className=" m-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-colors duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
