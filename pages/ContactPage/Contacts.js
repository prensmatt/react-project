import React, { useEffect, useState } from "react";

const Contacts = ({ apiUrl }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contacts.");
        return res.json();
      })
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [apiUrl]);


  return (
    <div className="contact-list">
      <h2>Contact Numbers</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>{users.name}</strong>: {users.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
