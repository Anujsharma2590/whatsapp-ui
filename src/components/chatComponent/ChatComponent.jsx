import "./ChatComponent.css";
import contacts from "../../data/contacts.json";

import Details from "../details/Details";
import Navigation from "../navigation/Navigation";
import SearchComponent from "../search/Search";
import List from "../list/List";
import Chat from "../chat/Chat";
import MessageInput from "../messageInput/MessageInput";

import { useState } from "react";

export default function ChatComponent() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [searchValue, setSearchValue] = useState("");

  function toggleNavigation() {
    setNavigationOpen(!navigationOpen);
  }

  function onClickOnContact(contact) {
    setSelectedContact(contact);
  }

  function updateSearchValue(value) {
    setSearchValue(value);
  }

  function getFilteredContacts(contacts) {
    const filteredContacts = contacts.filter((c) => {
      if (
        c.name.toLocaleUpperCase().includes(searchValue.toLocaleUpperCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    return filteredContacts;
  }

  return (
    <div
      className={`chatbox ${
        navigationOpen ? "chatbox-navigation-open" : "chatbox-navigation-closed"
      }`}
    >
      <Navigation
        navigationOpen={navigationOpen}
        toggleNavigation={toggleNavigation}
      />
      <SearchComponent />
      <List
        onClick={onClickOnContact}
        contacts={getFilteredContacts(contacts)}
      />
      <Details contact={selectedContact} />
      <Chat messages={selectedContact.messages} />
      <MessageInput />
    </div>
  );
}
