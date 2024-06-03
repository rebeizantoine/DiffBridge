import React, { useState } from "react";
import "../Dashboard/dashboardhome.css";

const initialArtists = [
  {
    id: 1,
    artist_name: "John",
    artist_lastname: "Doe",
    artist_aka: "JD",
    artist_image:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_arttype: "Painter",
    artist_country: "USA",
    artist_city: "New York",
    artist_work1: "Sunset",
    artist_work1des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_work2: "Portrait",
    artist_work2des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_work3: "Abstract",
    artist_work3des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    artist_name: "Jane",
    artist_lastname: "Smith",
    artist_aka: "JS",
    artist_image:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_arttype: "Sculptor",
    artist_country: "Canada",
    artist_city: "Toronto",
    artist_work1: "The Thinker",
    artist_work1des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_work2: "Eagle",
    artist_work2des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_work3: "Warrior",
    artist_work3des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

const ArtistFeatured = ({ title }) => {
  const [selectedArtistId, setSelectedArtistId] = useState("");
  const [selectedArtwork, setSelectedArtwork] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [chosenArtist, setChosenArtist] = useState(null);
  const [formStep, setFormStep] = useState(1);

  const handleArtistChange = (e) => {
    const artistId = e.target.value;
    setSelectedArtistId(artistId);
    setSelectedArtwork("");
    setAdditionalInfo("");
    const artist = initialArtists.find(
      (artist) => artist.id === parseInt(artistId)
    );
    setChosenArtist(artist);
    setFormStep(2);
  };

  const handleArtworkChange = (e) => {
    setSelectedArtwork(e.target.value);
    setFormStep(3);
  };

  const handleInfoChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  const handleSave = () => {
    setIsSaved(true);
    setFormStep(1);
    console.log(`${title} - Artist ID:`, selectedArtistId);
    console.log(`${title} - Artwork:`, selectedArtwork);
    console.log(`${title} - Additional Info:`, additionalInfo);
  };

  const handleEdit = () => {
    setIsSaved(false);
    setFormStep(1);
  };

  return (
    <div className="artist-featured123">
      <h2>{title}</h2>
      {isSaved && chosenArtist ? (
        <div>
          <p>
            Artist Chosen: {chosenArtist.artist_name}{" "}
            {chosenArtist.artist_lastname} ({chosenArtist.artist_aka})
          </p>
          <p>Artwork: {selectedArtwork}</p>
          <p>Additional Info: {additionalInfo}</p>
          <button onClick={handleEdit} className="edit-btn">
            Edit
          </button>
        </div>
      ) : (
        <div>
          {formStep >= 1 && (
            <div className="form-group">
              <label htmlFor={`artist-select-${title}`}>
                Choose an Artist:
              </label>
              <select
                id={`artist-select-${title}`}
                value={selectedArtistId}
                onChange={handleArtistChange}
              >
                <option value="">--Select Artist--</option>
                {initialArtists.map((artist) => (
                  <option key={artist.id} value={artist.id}>
                    {artist.artist_name} {artist.artist_lastname} (
                    {artist.artist_aka})
                  </option>
                ))}
              </select>
            </div>
          )}

          {formStep >= 2 && chosenArtist && (
            <div className="form-group">
              <label htmlFor={`artwork-select-${title}`}>
                Choose an Artwork:
              </label>
              <select
                id={`artwork-select-${title}`}
                value={selectedArtwork}
                onChange={handleArtworkChange}
              >
                <option value="">--Select Artwork--</option>
                <option value={chosenArtist.artist_work1}>
                  {chosenArtist.artist_work1}
                </option>
                <option value={chosenArtist.artist_work2}>
                  {chosenArtist.artist_work2}
                </option>
                <option value={chosenArtist.artist_work3}>
                  {chosenArtist.artist_work3}
                </option>
              </select>
            </div>
          )}

          {formStep >= 3 && (
            <div className="form-group">
              <label htmlFor={`additional-info-${title}`}>
                Additional Info:
              </label>
              <textarea
                id={`additional-info-${title}`}
                value={additionalInfo}
                onChange={handleInfoChange}
                className="resizable-textbox"
              />
            </div>
          )}

          <div className="form-group">
            <button onClick={handleSave} className="save-btn">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DashboardHome = () => {
  return (
    <div className="dashboard-home">
      <h1>Homepage Featured</h1>
      <div className="artist-container">
        <ArtistFeatured title="Artist Featured 1" />
        <ArtistFeatured title="Artist Featured 2" />
        <ArtistFeatured title="Artist Featured 3" />
        <ArtistFeatured title="Artist Featured 4" />
      </div>
    </div>
  );
};

export default DashboardHome;
