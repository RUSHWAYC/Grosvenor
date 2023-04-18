import React from "react";

const TextBox = ({ title, subt1, subt2 }) => {
  return (
    <div className="border-l-2 border-r-2 border-t-2 border-gray-300 mx-20 mt-4 p-4">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="mb-2">{subt1}</p>
      <p>{subt2}</p>
    </div>
  );
};

export default TextBox;
