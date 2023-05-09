import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {
  const musicArray = [
    {
      name: "Made in lagos",
      artist: "Wizkid",
      img: "/dav.jpg",
      album: "MID",
      id: 1,
    },
    {
      name: "Unavaliable",
      artist: "Davido",
      img: "/dav.jpg",
      album: "Timeless",
      id: 2,
    },
    { name: "True Love", artist: "Rema", img: "/dav.jpg", album: "MID", id: 3 },
    { name: "True Love", artist: "Rema", img: "/dav.jpg", album: "MID", id: 3 },
    { name: "True Love", artist: "Rema", img: "/dav.jpg", album: "MID", id: 3 },
  ];

  const [filterData, setFilterData] = useState(musicArray);
  const [track, setTrack] = useState(musicArray);

  const playlistName = "My Playlist";

  const [playlist, setPlaylist] = useState([]);

  const addTrack = (track) => {
    setPlaylist([...playlist, track]);
  };

  return (
    <div>
      <SearchBar data={musicArray} setFilterData={setFilterData} />
      <SearchResults data={filterData} addTrackToPL={addTrack} />
      <Playlist playlist={playlistName} track={playlist} />
    </div>
  );
}

export default App;
