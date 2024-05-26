import React from "react";

const ReactCard = ({ description, message, imgSrc }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imgSrc} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{message}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReactCard;
