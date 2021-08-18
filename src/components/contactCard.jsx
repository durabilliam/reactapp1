import React from "react";
import "../styles.css"

export default function ContactCard() {
  return (
    <div className="contact-card">
      <img src="https://via.placeholder.com/150" alt="profile"/>
      <div className="user-details">
        <p>Name: Adrian Mole</p>
        <p>Email: Molepeople@bandwagon.com</p>
        <p>Age:</p>
      </div>
    </div>
  )
}