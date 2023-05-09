import React from "react";
import Button from "../buttons/Button";
import Playlist from "./Playlist";

const Track = ({ title, artist, img, addToPL }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={img}
        className="object-cover object-center h-48 w-full"
        alt={`${title} by ${artist}`}
      />
      <div className=" p-4">
        <h2 className=" text-gray-800 text-lg font-medium truncate">{title}</h2>
        <p className=" mt-1 text-red-600 text-sm truncate">{artist}</p>
        {Playlist && (
          <>
            <Button text="Play on Spotify" />
            <Button text="Add to playlist" handleClick={addToPL} />
          </>
        )}
      </div>
    </div>
  );
};

export default Track;
