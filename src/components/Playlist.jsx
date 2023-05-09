import React from "react";
import Track from "./Track";

const Playlist = ({ playlist, track }) => {
  return (
    <div>
      <h1 className=" text-white text-3xl py-4 ">{playlist}</h1>
      {track.map((item) => (
        <div className=" px-2 py-5" key={item.id}>
          <Track title={item.name} artist={item.artist} img={item.img} />
        </div>
      ))}
    </div>
  );
};

export default Playlist;
