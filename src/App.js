import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    eventDetails: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We’ll be in touch shortly to confirm your catering event.");
    setForm({ name: "", email: "", eventDetails: "" });
  };

  return (
    <div
      className="App"
      style={{
        fontFamily: "sans-serif",
        padding: "2rem",
        background: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#fff",
          padding: "2rem",
          borderRadius: "16px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          🎉 Book Your Gourmet Catering Offer
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#555",
            marginBottom: "2rem",
          }}
        >
          This week only: Book your event and get a{" "}
          <strong>FREE dessert platter</strong> 🍰!
          <br />
          Limited to the first 5 bookings in Janesville.
        </p>
        <form 
  action="https://formsubmit.co/etsy327@gmail.com" 
  method="POST"
>

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="eventDetails"
            placeholder="Tell us about your event (date, size, type, location)"
            rows="5"
            value={form.eventDetails}
            onChange={handleChange}
            required
            style={{ ...inputStyle, resize: "vertical" }}
          />
          <button type="submit" style={buttonStyle}>
            🚀 Reserve My Spot
          </button>
        </form>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.8rem",
            color: "#999",
            marginTop: "1rem",
          }}
        >
          *Only valid for events booked by [Date] or until 10 slots are filled.
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const buttonStyle = {
  display: "block",
  width: "100%",
  padding: "1rem",
  fontSize: "1.1rem",
  backgroundColor: "#4f46e5",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
};

export default App;
