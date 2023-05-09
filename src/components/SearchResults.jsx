import React from "react";
import Track from "./Track";
import Button from "../buttons/Button";

const SearchResults = ({ data, addTrackToPL }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item) => (
        <div key={item.key} className=" px-2 py-5">
          <Track
            img={item.img}
            title={item.name}
            artist={item.artist}
            addToPL={() => addTrackToPL(item)}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
