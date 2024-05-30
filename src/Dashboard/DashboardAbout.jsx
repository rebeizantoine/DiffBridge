import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./aboutdashboard.css";

function DashboardAbout() {
  const [aboutData, setAboutData] = useState([
    {
      id: 1,
      abouttext: "Dummy about text 1",
      aboutimg: "https://via.placeholder.com/150",
      editable: false,
    },
    {
      id: 2,
      abouttext: "Dummy about text 2",
      aboutimg: "https://via.placeholder.com/150",
      editable: false,
    },
    {
      id: 3,
      abouttext: "Dummy about text 3",
      aboutimg: "https://via.placeholder.com/150",
      editable: false,
    },
  ]);

  const handleEdit = (id) => {
    const newData = aboutData.map((item) =>
      item.id === id ? { ...item, editable: true } : item
    );
    setAboutData(newData);
  };

  const handleSave = (id) => {
    const newData = aboutData.map((item) =>
      item.id === id ? { ...item, editable: false } : item
    );
    setAboutData(newData);
    toast.success("Changes saved successfully!");
  };

  const handleCancel = (id) => {
    const newData = aboutData.map((item) =>
      item.id === id ? { ...item, editable: false } : item
    );
    setAboutData(newData);
    toast.error("Changes discarded.");
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const newData = aboutData.map((item) =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setAboutData(newData);
  };

  return (
    <div className="about-section">
      <h2>About Section</h2>
      <table>
        <thead>
          <tr>
            <th>About Text</th>
            <th>About Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {aboutData.map((item) => (
            <tr key={item.id}>
              <td>
                {item.editable ? (
                  <textarea
                    name="abouttext"
                    value={item.abouttext}
                    onChange={(e) => handleInputChange(e, item.id)}
                  />
                ) : (
                  item.abouttext
                )}
              </td>
              <td>
                {item.editable ? (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleInputChange(e, item.id)}
                  />
                ) : (
                  <img src={item.aboutimg} alt="About" />
                )}
              </td>
              <td>
                {item.editable ? (
                  <>
                    <button onClick={() => handleSave(item.id)}>Save</button>
                    <button onClick={() => handleCancel(item.id)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default DashboardAbout;
