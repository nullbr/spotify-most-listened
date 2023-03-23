import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { songs } from "./songs";
import Song from "./Song";

const SongList = () => {
  const getSong = (songId) => {
    const song = songs.find((song) => song.id === songId);
    console.log(song);
  };
  return (
    <>
      <h1>Spotify Most Lstened Songs</h1>
      <section className="song-list">
        {songs.map((song, index) => {
          return (
            <Song
              key={song.id}
              getSong={getSong}
              number={index}
              {...song}
            ></Song>
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<SongList></SongList>);
