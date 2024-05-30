import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./dashboardcv.css";

const initialExhibitions = [
  {
    id: 1,
    exhibition_name: "Summer Art Expo",
    country: "USA",
    city: "New York",
    opening_hours: "10:00 AM",
    closing_hours: "6:00 PM",
    description:
      "A showcase of contemporary art from various artists around the world.",
    featured1_name: "John Doe",
    featured1_image:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    featured2_name: "Jane Smith",
    featured2_image:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    featured3_name: "Alex Johnson",
    featured3_image:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    exhibition_name: "Spring Sculpture Show",
    country: "Canada",
    city: "Toronto",
    opening_hours: "9:00 AM",
    closing_hours: "5:00 PM",
    description:
      "An exhibition featuring stunning sculptures from renowned artists.",
    featured1_name: "Michael Brown",
    featured1_image:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    featured2_name: "Emily White",
    featured2_image:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    featured3_name: "David Green",
    featured3_image:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

function DashboardExperience() {
  const [exhibitions, setExhibitions] = useState(initialExhibitions);
  const [isEditing, setIsEditing] = useState(false);
  const [currentExhibition, setCurrentExhibition] = useState(null);

  const handleDelete = (exhibitionId) => {
    setExhibitions((prevExhibitions) =>
      prevExhibitions.filter((exhibition) => exhibition.id !== exhibitionId)
    );
    toast.success("Exhibition deleted successfully");
  };

  const openImageInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const handleEditClick = (exhibition) => {
    setCurrentExhibition(exhibition);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentExhibition((prevExhibition) => ({
      ...prevExhibition,
      [name]: value,
    }));
  };

  const handleEditSave = () => {
    setExhibitions((prevExhibitions) =>
      prevExhibitions.map((exhibition) =>
        exhibition.id === currentExhibition.id ? currentExhibition : exhibition
      )
    );
    setIsEditing(false);
    setCurrentExhibition(null);
    toast.success("Exhibition updated successfully");
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setCurrentExhibition(null);
  };

  const handleImageUpload = (e, imageName) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCurrentExhibition((prevExhibition) => ({
        ...prevExhibition,
        [imageName]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="dashboard-cv">
      <ToastContainer />
      <fieldset className="cv-fieldset">
        <div className="cv" id="cv">
          <h1>Exhibitions</h1>
          <table className="exhibitions-table">
            <thead>
              <tr>
                <th>Exhibition Name</th>
                <th>Country</th>
                <th>City</th>
                <th>Opening Hours</th>
                <th>Closing Hours</th>
                <th>Description</th>
                <th>Featured Artist 1</th>
                <th>Image 1</th>
                <th>Featured Artist 2</th>
                <th>Image 2</th>
                <th>Featured Artist 3</th>
                <th>Image 3</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {exhibitions.map((exhibition) => (
                <tr key={exhibition.id}>
                  <td>{exhibition.exhibition_name}</td>
                  <td>{exhibition.country}</td>
                  <td>{exhibition.city}</td>
                  <td>{exhibition.opening_hours}</td>
                  <td>{exhibition.closing_hours}</td>
                  <td>{exhibition.description}</td>
                  <td>{exhibition.featured1_name}</td>
                  <td>
                    <img
                      src={exhibition.featured1_image}
                      alt={exhibition.featured1_name}
                      className="artist-img"
                      onClick={() =>
                        openImageInNewTab(exhibition.featured1_image)
                      }
                    />
                  </td>
                  <td>{exhibition.featured2_name}</td>
                  <td>
                    <img
                      src={exhibition.featured2_image}
                      alt={exhibition.featured2_name}
                      className="artist-img"
                      onClick={() =>
                        openImageInNewTab(exhibition.featured2_image)
                      }
                    />
                  </td>
                  <td>{exhibition.featured3_name}</td>
                  <td>
                    <img
                      src={exhibition.featured3_image}
                      alt={exhibition.featured3_name}
                      className="artist-img"
                      onClick={() =>
                        openImageInNewTab(exhibition.featured3_image)
                      }
                    />
                  </td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditClick(exhibition)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(exhibition.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isEditing && (
            <div className="edit-form">
              <h2>Edit Exhibition</h2>
              <label>
                Exhibition Name:
                <input
                  type="text"
                  name="exhibition_name"
                  value={currentExhibition.exhibition_name}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Country:
                <input
                  type="text"
                  name="country"
                  value={currentExhibition.country}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={currentExhibition.city}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Opening Hours:
                <input
                  type="text"
                  name="opening_hours"
                  value={currentExhibition.opening_hours}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Closing Hours:
                <input
                  type="text"
                  name="closing_hours"
                  value={currentExhibition.closing_hours}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={currentExhibition.description}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Featured Artist 1:
                <input
                  type="text"
                  name="featured1_name"
                  value={currentExhibition.featured1_name}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Image 1 URL:
                <input
                  type="text"
                  name="featured1_image"
                  value={currentExhibition.featured1_image}
                  onChange={handleEditChange}
                />
                <input
                  type="file"
                  onChange={(e) => handleImageUpload(e, "featured1_image")}
                />
              </label>
              <label>
                Featured Artist 2:
                <input
                  type="text"
                  name="featured2_name"
                  value={currentExhibition.featured2_name}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Image 2 URL:
                <input
                  type="text"
                  name="featured2_image"
                  value={currentExhibition.featured2_image}
                  onChange={handleEditChange}
                />
                <input
                  type="file"
                  onChange={(e) => handleImageUpload(e, "featured2_image")}
                />
              </label>
              <label>
                Featured Artist 3:
                <input
                  type="text"
                  name="featured3_name"
                  value={currentExhibition.featured3_name}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Image 3 URL:
                <input
                  type="text"
                  name="featured3_image"
                  value={currentExhibition.featured3_image}
                  onChange={handleEditChange}
                />
                <input
                  type="file"
                  onChange={(e) => handleImageUpload(e, "featured3_image")}
                />
              </label>
              <button className="save-btn" onClick={handleEditSave}>
                Save
              </button>
              <button className="cancel-btn" onClick={handleEditCancel}>
                Cancel
              </button>
            </div>
          )}
        </div>
      </fieldset>
    </div>
  );
}

export default DashboardExperience;
