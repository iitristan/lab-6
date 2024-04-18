import React, { useState } from "react";
import "./App.css";

const tempMusicData = [
  { id: 1, title: "Sagada", artist: "Cup of Joe", genre: "OPM" },
  { id: 2, title: "Alon", artist: "Cup of Joe", genre: "OPM" },
  { id: 3, title: "Hangad", artist: "Cup of Joe", genre: "OPM" },
  { id: 4, title: "Araw-Araw", artist: "Ben&Ben", genre: "OPM" },
  { id: 5, title: "Paubaya", artist: "Moira Dela Torre", genre: "OPM" },
  { id: 6, title: "Imahe", artist: "Magnus Haven", genre: "OPM Rock" },
  { id: 7, title: "Binibini", artist: "Zack Tabudlo", genre: "OPM" },
  { id: 8, title: "Hanggang Kailan", artist: "Orange and Lemons", genre: "OPM" },
  { id: 9, title: "Kathang Isip", artist: "Ben&Ben", genre: "Indie Folk" },
  { id: 10, title: "Sana", artist: "I Belong to the Zoo", genre: "Alternative Rock" }
];

function App() {
  const [musics, setMusics] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToPlaylist = (music) => {
    if (!playlist.some((item) => item.id === music.id)) {
      setPlaylist([...playlist, music]);
    }
  };

  const removeFromPlaylist = (music) => {
    setPlaylist(playlist.filter((item) => item.id !== music.id));
  };

  const filteredMusics = musics.filter(
    (music) =>
      music.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      music.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      music.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <nav>
        <h1 style={{ textAlign: "center" }}>Music App</h1>
        <div>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <p>
          Found <strong>{filteredMusics.length}</strong> results for "{searchQuery}"
        </p>
      </nav>
      <div className="container">
        <div className="container">
          <h2>Music List</h2>
          <ul>
            {filteredMusics.map((music) => (
              <li key={music.id}>
                {music.title} by {music.artist} ({music.genre})
                <button onClick={() => addToPlaylist(music)}>Add to Playlist ♥️</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="container">
          <h2>Playlist</h2>
          <ul>
            {playlist.map((music) => (
              <li key={music.id}>
                {music.title} by {music.artist}
                <button onClick={() => removeFromPlaylist(music)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
