import React from "react";
import Contacts from "./Contacts";

const ContactPage = () => {
  return (
    <div>
      <h1>My Contact Directory</h1>
      <Contacts apiUrl="https://jsonplaceholder.typicode.com" />
    </div>
  );
};

export default ContactPage;
