import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Draggable from "react-draggable";
import "./dashboardcv.css";
import AddArtistForm from "../Components/AddArtistForm"; // Import your AddArtistForm component

const DashboardArtists = () => {
  const [artists, setArtists] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArtist, setCurrentArtist] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const [newArtist, setNewArtist] = useState({
    artist_name: "",
    artist_lastname: "",
    artist_aka: "",
    artist_arttype: "",
    artist_image: null,
    artist_country: "",
    artist_city: "",
    artist_about: "",
    artist_work1: null,
    artist_work1des: "",
    artist_work2: null,
    artist_work2des: "",
    artist_work3: null,
    artist_work3des: "",
  });
  const [aboutWordCount, setAboutWordCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://bridges-backend-ob24.onrender.com/artists")
      .then((response) => {
        setArtists(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the artists!", error);
      });
  }, []);

  const handleDelete = (artistId) => {
    axios
      .delete(`https://bridges-backend-ob24.onrender.com/artists/${artistId}`)
      .then(() => {
        setArtists((prevArtists) =>
          prevArtists.filter((artist) => artist._id !== artistId)
        );
        toast.success("Artist deleted successfully");
      })
      .catch((error) => {
        console.error("There was an error deleting the artist!", error);
      });
  };

  const handleEditClick = (artist) => {
    setCurrentArtist(artist);
    setAboutWordCount(countWords(artist.artist_about));
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    if (name === "artist_about") {
      const wordCount = countWords(value);
      if (wordCount <= 50) {
        setCurrentArtist((prevArtist) => ({
          ...prevArtist,
          [name]: value,
        }));
        setAboutWordCount(wordCount);
      }
    } else {
      setCurrentArtist((prevArtist) => ({
        ...prevArtist,
        [name]: value,
      }));
    }
  };

  const handleEditSave = () => {
    axios
      .put(
        `https://bridges-backend-ob24.onrender.com/artists/${currentArtist._id}`,
        currentArtist
      )
      .then(() => {
        setArtists((prevArtists) =>
          prevArtists.map((artist) =>
            artist._id === currentArtist._id ? currentArtist : artist
          )
        );
        setIsEditing(false);
        setCurrentArtist(null);
        toast.success("Artist updated successfully");
      })
      .catch((error) => {
        console.error("There was an error updating the artist!", error);
      });
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setCurrentArtist(null);
  };

  const handleImageUpload = (e, imageName) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCurrentArtist((prevArtist) => ({
        ...prevArtist,
        [imageName]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const openImageInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleAddCancel = () => {
    setIsAdding(false);
    setNewArtist({});
  };

  const handleNewImageUpload = (e, imageName) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewArtist((prevArtist) => ({
        ...prevArtist,
        [imageName]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const countWords = (text) => {
    return text
      ? text.split(/\s+/).filter((word) => word.length > 0).length
      : 0;
  };

  return (
    <div className="dashboard-cv">
      <ToastContainer />
      <fieldset className="cv-fieldset">
        <div className="cv" id="cv">
          <h1>Artists</h1>
          <button className="add-btn" onClick={() => setIsAdding(true)}>
            Add Artist
          </button>
          <table className="artists-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>AKA</th>
                <th>Art Type</th>
                <th>Image</th>
                <th>Country</th>
                <th>City</th>
                <th>About</th>
                <th>Work 1</th>
                <th>Work 1 Description</th>
                <th>Work 2</th>
                <th>Work 2 Description</th>
                <th>Work 3</th>
                <th>Work 3 Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist) => (
                <tr key={artist._id}>
                  <td>{artist.artist_name}</td>
                  <td>{artist.artist_lastname}</td>
                  <td>{artist.artist_aka}</td>
                  <td>{artist.artist_arttype}</td>
                  <td>
                    <img
                      src={artist.artist_image}
                      alt={artist.artist_name}
                      className="artist-img"
                      onClick={() => openImageInNewTab(artist.artist_image)}
                    />
                  </td>
                  <td>{artist.artist_country}</td>
                  <td>{artist.artist_city}</td>
                  <td>
                    <Draggable>
                      <div>{artist.artist_about}</div>
                    </Draggable>
                  </td>
                  <td>
                    <img
                      src={artist.artist_work1}
                      alt={artist.artist_work1name}
                      className="artist-img"
                      onClick={() => openImageInNewTab(artist.artist_work1)}
                    />
                  </td>
                  <td>{artist.artist_work1des}</td>
                  <td>
                    <img
                      src={artist.artist_work2}
                      alt={artist.artist_work2name}
                      className="artist-img"
                      onClick={() => openImageInNewTab(artist.artist_work2)}
                    />
                  </td>
                  <td>{artist.artist_work2des}</td>
                  <td>
                    <img
                      src={artist.artist_work3}
                      alt={artist.artist_work3name}
                      className="artist-img"
                      onClick={() => openImageInNewTab(artist.artist_work3)}
                    />
                  </td>
                  <td>{artist.artist_work3des}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditClick(artist)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(artist._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isAdding && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleAddCancel}>
                  &times;
                </span>
                <h2>Add Artist</h2>
                <AddArtistForm
                  onCancel={handleAddCancel}
                  onSuccess={() => {
                    setIsAdding(false);
                    toast.success("Artist added successfully");
                  }}
                />
              </div>
            </div>
          )}
          {isEditing && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleEditCancel}>
                  &times;
                </span>
                <h2>Edit Artist</h2>
                <div
                  className="
modal-body"
                >
                  <label>
                    Name:
                    <input
                      type="text"
                      name="artist_name"
                      value={currentArtist.artist_name || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Last Name:
                    <input
                      type="text"
                      name="artist_lastname"
                      value={currentArtist.artist_lastname || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    AKA:
                    <input
                      type="text"
                      name="artist_aka"
                      value={currentArtist.artist_aka || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Art Type:
                    <input
                      type="text"
                      name="artist_arttype"
                      value={currentArtist.artist_arttype || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Image:
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "artist_image")}
                    />
                    {currentArtist.artist_image && (
                      <img
                        src={currentArtist.artist_image}
                        alt="Preview"
                        className="artist-img-preview"
                      />
                    )}
                  </label>
                  <label>
                    Country:
                    <input
                      type="text"
                      name="artist_country"
                      value={currentArtist.artist_country || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    City:
                    <input
                      type="text"
                      name="artist_city"
                      value={currentArtist.artist_city || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    About: (Max 50 words)
                    <textarea
                      name="artist_about"
                      value={currentArtist.artist_about || ""}
                      onChange={handleEditChange}
                    />
                    <div>Words left: {50 - aboutWordCount}</div>
                  </label>
                  <label>
                    Work 1:
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "artist_work1")}
                    />
                    {currentArtist.artist_work1 && (
                      <img
                        src={currentArtist.artist_work1}
                        alt="Preview"
                        className="artist-img-preview"
                      />
                    )}
                  </label>
                  <label>
                    Work 1 Description:
                    <textarea
                      name="artist_work1des"
                      value={currentArtist.artist_work1des || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Work 2:
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "artist_work2")}
                    />
                    {currentArtist.artist_work2 && (
                      <img
                        src={currentArtist.artist_work2}
                        alt="Preview"
                        className="artist-img-preview"
                      />
                    )}
                  </label>
                  <label>
                    Work 2 Description:
                    <textarea
                      name="artist_work2des"
                      value={currentArtist.artist_work2des || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Work 3:
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "artist_work3")}
                    />
                    {currentArtist.artist_work3 && (
                      <img
                        src={currentArtist.artist_work3}
                        alt="Preview"
                        className="artist-img-preview"
                      />
                    )}
                  </label>
                  <label>
                    Work 3 Description:
                    <textarea
                      name="artist_work3des"
                      value={currentArtist.artist_work3des || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <button className="save-btn" onClick={handleEditSave}>
                    Save
                  </button>
                  <button className="cancel-btn" onClick={handleEditCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </fieldset>
      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.4);
        }
        .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
          max-width: 600px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          animation: fadeIn 0.3s ease-in-out;
          position: relative;
          max-height: 80%;
          overflow-y: auto;
        }
        .modal-body {
          max-height: 60vh;
          overflow-y: auto;
        }
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardArtists;
