import React from "react";

const Card = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Card;
