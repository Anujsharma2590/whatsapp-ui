import "./List.css";

import Contact from "../contact/Contact";

export default function List({ contacts, onClick }) {
  return (
    <div className="list-section">
      {contacts.map((c) => {
        return <Contact onClick={onClick} key={c.name} contact={c} />;
      })}
    </div>
  );
}
