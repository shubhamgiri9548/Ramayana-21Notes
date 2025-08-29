import React from "react";

const SeasonCard = ({ name, image, episodeCount }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{episodeCount} Episodes</p>
      </div>
    </div>
  );
};

export default SeasonCard;
