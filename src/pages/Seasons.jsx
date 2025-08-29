import React from "react";
import { Link } from "react-router-dom";
import SeasonCard from "../components/SeasonCard";
import episodes from "../data/episodes";

const Seasons = () => {
  const seasons = [
    { id: 1, name: "Baal Kand", image: "/images/baal-kand.jpg", episodeCount: episodes.season1.length },
    { id: 2, name: "Ayodhya Kand", image: "/images/ayodhya-kand.jpg", episodeCount: episodes.season2.length },
    { id: 3, name: "Aranya Kand", image: "/images/aranya-kand.jpg", episodeCount: episodes.season3.length },
    { id: 4, name: "Kishkindha Kand", image: "/images/kishkindha-kand.jpg", episodeCount: episodes.season4.length },
    { id: 5, name: "Sundar Kand", image: "/images/sundar-kand.jpg", episodeCount: episodes.season5.length },
    { id: 6, name: "Lanka Kand", image: "/images/lanka-kand.jpg", episodeCount: episodes.season6.length },
    { id: 7, name: "Uttar Kand", image: "/images/uttar-kand.jpg", episodeCount: episodes.season7.length },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Seasons of Ramayana</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {seasons.map((season) => (
          <Link key={season.id} to={`/seasons/${season.id}`}>
            <SeasonCard
              name={season.name}
              image={season.image}
              episodeCount={season.episodeCount}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
