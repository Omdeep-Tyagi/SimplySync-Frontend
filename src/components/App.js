import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import api from "../api/contacts";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  const [searchResults, setSearchResults] = useState([]);


  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
        <Routes>
          {/* Home Route - Contact List */}
          <Route
            path="/"
            element={
              <ContactList />}
          />
          {/* Add Contact Route */}
          <Route
            path="/add"
            element={<AddContact />}
          />
          {/* Edit Contact Route */}
          <Route
            path="/edit"
            element={<EditContact />}
          />
          {/* Contact Detail Route */}
          <Route 
            path="/contact/:id" 
            element={<ContactDetail />}
          />
        </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
