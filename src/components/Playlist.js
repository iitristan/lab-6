import React from "react";

function Playlist({ musics }) {
  return (
    <div className="container">
      <h2>Playlist</h2>
      <ul>
        {musics.map((music) => (
          <li key={music.id}>
            {music.title} by {music.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
