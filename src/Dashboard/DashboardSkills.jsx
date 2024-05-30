import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contactdash.css";

const initialContacts = [
  { id: 1, platform: "Facebook", url: "https://facebook.com/artist" },
  { id: 2, platform: "Instagram", url: "https://instagram.com/artist" },
  { id: 3, platform: "Pinterest", url: "https://pinterest.com/artist" },
  { id: 4, platform: "YouTube", url: "https://youtube.com/artist" },
];

function DashboardCV() {
  const [contacts, setContacts] = useState(initialContacts);
  const [isEditing, setIsEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
    toast.success("Contact deleted successfully");
  };

  const handleEditContactClick = (contact) => {
    setCurrentContact(contact);
    setIsEditing(true);
  };

  const handleEditContactChange = (e) => {
    const { name, value } = e.target;
    setCurrentContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleEditContactSave = () => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === currentContact.id ? currentContact : contact
      )
    );
    setIsEditing(false);
    setCurrentContact(null);
    toast.success("Contact updated successfully");
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setCurrentContact(null);
  };

  return (
    <div className="dashboard-cv">
      <ToastContainer />
      <fieldset className="cv-fieldset">
        <div className="contact-us" id="contact-us">
          <h1>Contact Us</h1>
          <table className="contacts-table">
            <thead>
              <tr>
                <th>Platform</th>
                <th>URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.platform}</td>
                  <td>{contact.url}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditContactClick(contact)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isEditing && currentContact && (
          <div className="edit-form">
            <h2>Edit Contact</h2>
            <label>
              Platform:
              <input
                type="text"
                name="platform"
                value={currentContact.platform}
                onChange={handleEditContactChange}
              />
            </label>
            <label>
              URL:
              <input
                type="text"
                name="url"
                value={currentContact.url}
                onChange={handleEditContactChange}
              />
            </label>
            <button className="save-btn" onClick={handleEditContactSave}>
              Save
            </button>
            <button className="cancel-btn" onClick={handleEditCancel}>
              Cancel
            </button>
          </div>
        )}
      </fieldset>
    </div>
  );
}

export default DashboardCV;
