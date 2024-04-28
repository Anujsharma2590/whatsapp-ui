import "./Contact.css";

export default function Contact({ contact, onClick }) {
  return (
    <div onClick={(e) => onClick(contact)} className="contact">
      <img
        alt="profile"
        className="profile-picture"
        src={contact.profile_image}
      />
      <div className="details">
        <span className="name">{contact.name}</span>
        <span className="status">{contact.status}</span>
      </div>
    </div>
  );
}
