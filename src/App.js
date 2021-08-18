import React from "react"
import ContactCard from "./components/contactCard";

const App = () => {
  const contacts = [
    { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
    { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
    { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
    { name: "Scott Summers", email: "cyclops@greymalkin.com", age: 35 }
  ];

  const message = "No way LOL!!!!";
  const handleClick = () => {
    alert("You clicked!!!!");
  }
  return (
    <>
    {contacts.map(contact => (
      <ContactCard
      avatar="https://via.placeholder.com/150"
      name={contact.name}
      email={contact.email}
      age={contact.age}
      />
    ))}
    </>
  );

};

export default App;