import React, { useState } from "react";
import "../Styles/artists.css";

const artists = [
  { id: 1, name: "Artist 1", image: "Artist Image 1", artwork: "Artwork 1" },
  { id: 2, name: "Artist 2", image: "Artist Image 2", artwork: "Artwork 2" },
  { id: 3, name: "Artist 3", image: "Artist Image 3", artwork: "Artwork 3" },
  // Add more artists as needed
];

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="artists-page">
      <h1 className="page-title">Our Artists</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for an artist..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="artists-grid">
        {filteredArtists.map((artist) => (
          <div key={artist.id} className="artist-bubble">
            <div className="bubble-content">
              <div className="artist-image">{artist.image}</div>
              <div className="artist-artwork">{artist.artwork}</div>
            </div>
            <div className="artist-name">{artist.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
