import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";

import cards from "../data/cardGridData";

const ApplicationGrid = () => {
  return (
    <div className="sm:mx-20 mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
      {cards.map((card) => (
        <Link key={card.id} to={`/primena/${card.id}`}>
          <div
            className={`relative overflow-hidden cursor-pointer transition-colors duration-300 ease-in-out ${card.color} hover:bg-yellow-500`}
          >
            <div className="absolute top-0 right-0 text-white mt-1 mr-1">
              <BsLink45Deg size={32} />
            </div>
            <div className="p-4">
              <div className="border-l-2 border-gray-200 pl-2 text-center h-24">
                <h3 className="text-white py-4 font-bold text-lg h-full flex items-center justify-center">
                  {card.text}
                </h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ApplicationGrid;
