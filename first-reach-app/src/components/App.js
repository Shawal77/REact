import React from "react";
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {

  const contacts = [
    {
      id:'1',
      name:'Shawal',
      email:'shawal@smail.com',
      tel:'0898989893'
    },
    {
      id:'2',
      name:'Druscilla',
      email:'druscilla@smail.com',
      tel:'0898989892'
    },
    {
      id:'3',
      name: 'Connie',
      email:'connie@smail.com',
      tel:'0898989891'
    }
  ];

  return (
    <div className="ui container">
      <Header />
      <h1></h1>
      <AddContact />
      <ContactList contacts={ contacts } />
    </div>
  );
}

export default App;
