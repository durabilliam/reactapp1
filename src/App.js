import React, { useEffect, useState } from "react"
import ContactCard from "./components/contactCard";

const App = () => {
  const [contacts, setContacts] = useState([]);
  // const contacts = [
  //   { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
  //   { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
  //   { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
  //   { name: "Scott Summers", email: "cyclops@greymalkin.com", age: 35 }
  // ];
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setContacts(data.results);
      });
  }, [])


  const message = "No way LOL!!!!";
  const handleClick = () => {
    alert("You clicked!!!!");
  }
  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </>
  );

};

export default App;