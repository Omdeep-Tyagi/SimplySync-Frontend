import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const AddContact = ({ addContactHandler }) => {
  // State for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Handle form submission
  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler({ name, email }); // Add the new contact
    setName(""); // Reset the form fields
    setEmail("");
    navigate("/"); // Navigate back to the home page (using useNavigate)
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
