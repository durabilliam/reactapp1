import React, { useState } from "react";
import "../styles.css"

export default function ContactCard(props) {
  const [showAge, setShowAge] = useState(false);
  const ageToggle = <button onClick = {() => setShowAge(!showAge)}>Toggle Age</button>

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile"/>
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        {ageToggle}
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  )
}