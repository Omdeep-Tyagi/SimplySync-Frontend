import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id,name, email } = location.state.contact;

    // State for contact details
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const {updateContactHandler} = useContactsCrud();


  // Handle form submission to update the contact
  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("All fields are mandatory!");
      return;
    }
    updateContactHandler({ id, name:newName, email:newEmail });
    setNewName(""); // Clear fields after submission
    setNewEmail("");
    navigate("/"); // Navigate to the home page after update
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)} // Update name field
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)} // Update email field
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
