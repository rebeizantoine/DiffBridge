import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./dashboardhome2.css"; // Import your CSS file here

const DashboardHome2 = () => {
  const initialPaintings = [
    {
      feature_artist_name: "John",
      feature_artist_last_name: "Doe",
      feature_genre: "Abstract",
      feature_name_of_painting: "Untitled 1",
      feature_image_of_painting: "https://via.placeholder.com/150",
      feature_description_of_painting: "Lorem ipsum dolor sit amet",
      feature_tag1: "Tag1",
      feature_tag2: "Tag2",
      feature_tag3: "Tag3",
    },
    {
      feature_artist_name: "Jane",
      feature_artist_last_name: "Doe",
      feature_genre: "Realism",
      feature_name_of_painting: "Untitled 2",
      feature_image_of_painting: "https://via.placeholder.com/150",
      feature_description_of_painting: "Lorem ipsum dolor sit amet",
      feature_tag1: "Tag1",
      feature_tag2: "Tag2",
      feature_tag3: "Tag3",
    },
    {
      feature_artist_name: "Alex",
      feature_artist_last_name: "Smith",
      feature_genre: "Impressionism",
      feature_name_of_painting: "Untitled 3",
      feature_image_of_painting: "https://via.placeholder.com/150",
      feature_description_of_painting: "Lorem ipsum dolor sit amet",
      feature_tag1: "Tag1",
      feature_tag2: "Tag2",
      feature_tag3: "Tag3",
    },
  ];

  const [paintings, setPaintings] = useState(initialPaintings);
  const [editIndex, setEditIndex] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    setPreviewImage(paintings[index].feature_image_of_painting); // Set preview image to the current painting image
  };

  const handleSave = (index) => {
    setEditIndex(null);
    toast.success("Painting details saved successfully!");
  };

  const handleChange = (e, index, field) => {
    const newPaintings = [...paintings];
    newPaintings[index][field] = e.target.value;
    setPaintings(newPaintings);
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPaintings = [...paintings];
        newPaintings[index].feature_image_of_painting = reader.result;
        setPaintings(newPaintings);
        setPreviewImage(reader.result); // Set the preview image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dashboard-home" id="featured-paintings">
      <ToastContainer />
      <h2>Featured Paintings</h2>
      <div className="painting-container">
        {paintings.map((painting, index) => (
          <div className="edit-featured-painting" key={index}>
            <form>
              <div className="form-group">
                <label htmlFor={`artistName${index}`}>Artist Name:</label>
                <input
                  type="text"
                  id={`artistName${index}`}
                  value={painting.feature_artist_name}
                  onChange={(e) =>
                    handleChange(e, index, "feature_artist_name")
                  }
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`lastName${index}`}>Last Name:</label>
                <input
                  type="text"
                  id={`lastName${index}`}
                  value={painting.feature_artist_last_name}
                  onChange={(e) =>
                    handleChange(e, index, "feature_artist_last_name")
                  }
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`genre${index}`}>Genre:</label>
                <input
                  type="text"
                  id={`genre${index}`}
                  value={painting.feature_genre}
                  onChange={(e) => handleChange(e, index, "feature_genre")}
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`paintingName${index}`}>
                  Name of Painting:
                </label>
                <input
                  type="text"
                  id={`paintingName${index}`}
                  value={painting.feature_name_of_painting}
                  onChange={(e) =>
                    handleChange(e, index, "feature_name_of_painting")
                  }
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`paintingImage${index}`}>
                  Image of Painting:
                </label>
                {editIndex === index ? (
                  <>
                    <input
                      type="file"
                      id={`paintingImage${index}`}
                      onChange={(e) => handleImageChange(e, index)}
                    />
                    {previewImage && (
                      <img
                        src={previewImage}
                        alt="Painting Preview"
                        className="painting-image"
                      />
                    )}
                  </>
                ) : (
                  <img
                    src={painting.feature_image_of_painting}
                    alt="Painting"
                    className="painting-image"
                  />
                )}
              </div>
              <div className="form-group">
                <label htmlFor={`description${index}`}>Description:</label>
                <textarea
                  id={`description${index}`}
                  value={painting.feature_description_of_painting}
                  onChange={(e) =>
                    handleChange(e, index, "feature_description_of_painting")
                  }
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`tag1${index}`}>Tag 1:</label>
                <input
                  type="text"
                  id={`tag1${index}`}
                  value={painting.feature_tag1}
                  onChange={(e) => handleChange(e, index, "feature_tag1")}
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`tag2${index}`}>Tag 2:</label>
                <input
                  type="text"
                  id={`tag2${index}`}
                  value={painting.feature_tag2}
                  onChange={(e) => handleChange(e, index, "feature_tag2")}
                  readOnly={editIndex !== index}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`tag3${index}`}>Tag 3:</label>
                <input
                  type="text"
                  id={`tag3${index}`}
                  value={painting.feature_tag3}
                  onChange={(e) => handleChange(e, index, "feature_tag3")}
                  readOnly={editIndex !== index}
                />
              </div>
              {editIndex === index ? (
                <button
                  type="button"
                  className="save-btn"
                  onClick={() => handleSave(index)}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              )}
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome2;
