import React, { useState } from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";

function Contact({
  contact,
  setContact,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
 
}) {
  const navigate = useNavigate();

  const Sumbit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("please enter a vaild name ");
    } else if (email === "") {
      alert("please enter a vaiod email");
    } else if (phone.length < 10) {
      alert("please enter a vaild mobile no ");
    } else {
      setContact([
        ...contact,
        {
          name: name,
          email: email,
          phone: phone,
          id: contact.length + 1,
        },
      ]);

      setName("");
      setEmail("");

      setPhone("");
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Contant Create Page</h1>
      <button className="bigbtn" onClick={() => navigate("/")}>
        {" "}
        Home
      </button>
      <div>
        <form className="form">
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>
            Add New Contact
          </p>
          <label>Contact Name</label>
          <input
            type="text"
            placeholder="Enter contact name "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="Enter mobile number "
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button className="bigbtn" onClick={(e) => Sumbit(e)}>
            Save Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
