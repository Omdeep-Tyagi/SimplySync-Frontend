import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = () => {
  const location = useLocation();
  console.log("testing location",location);  // Check if the state is there
  

  // Destructure contact from location.state, or default to null if undefined
 // const contact = location.state ? location.state.contact : null;
 const contact = location.state?.contact || null;
 console.log("testing contact",contact);  // Log the contact object

  if (!contact) {
    // If contact is not found in location.state, show an error or a fallback UI
    return (
      <div>
        <h2>Error: Contact not found</h2>
        <p>No contact data available. Please make sure the data was passed correctly.</p>
        <Link to="/">Back to Contact List</Link>
      </div>
    );
  }

  const { name = "No Name Provided", email = "No Email Provided" } = contact;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
