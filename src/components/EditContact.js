import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditContact = ({ updateContactHandler }) => {
  // State for contact details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Get the location and navigate from React Router v6
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if location.state is available before accessing location.state.contact
    if (location.state && location.state.contact) {
      const { name, email } = location.state.contact;
      setName(name);
      setEmail(email);
    } else {
      // Redirect back to the home page if location.state is null or contact is not found
      navigate("/");
    }
  }, [location.state, navigate]); // Add navigate to dependency array for redirects

  // Handle form submission to update the contact
  const update = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "") {
      alert("All fields are mandatory!");
      return;
    }
    updateContactHandler({ id: location.state.contact.id, name, email });
    setName(""); // Clear fields after submission
    setEmail("");
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
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name field
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email field
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
