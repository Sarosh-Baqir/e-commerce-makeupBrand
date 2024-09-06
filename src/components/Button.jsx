import React from "react";

const Button = ({ type = "button", className = "", children, ...props }) => {
  return (
    <button
      type={type}
      className={`w-full bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
