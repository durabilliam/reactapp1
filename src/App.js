import React from "react"
import ContactCard from "./components/contactCard";

const App = () => {
  const message = "No way LOL!!!!";
  const handleClick = () => {
    alert("You clicked!!!!");
  }
  return (
    <ContactCard/>
  );

};

export default App;