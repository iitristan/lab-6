import React from "react";

function MusicList({ musics }) {
  return (
    <div className="container">
      <h2>Music List</h2>
      <ul>
        {musics.map((music) => (
          <li key={music.id}>
            {music.title} by {music.artist} ({music.genre})
            <button>♥️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MusicList;
