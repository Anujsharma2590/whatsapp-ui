import { EllipsisVertical, Paperclip } from "lucide-react";
import "./Details.css";

export default function Details({ contact }) {
  function getLastSeen(last_seen) {
    const date = new Date(last_seen);

    let suffix = "";

    let hours = date.getHours();

    if (hours > 12) {
      suffix = "PM";
      hours -= 12;
    } else {
      suffix = "AM";
    }

    return `last seen ${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()} at ${hours}:${date.getMinutes()} ${suffix}`;
  }
  return (
    <div className="details-section">
      <div className="user">
        <img
          alt="profile"
          className="profile-picture"
          src={contact.profile_image}
        />
        <div className="details">
          <span className="name">{contact.name}</span>
          <span className="last-seen">{getLastSeen(contact.last_seen)}</span>
        </div>
      </div>
      <div className="actions">
        <Paperclip className="icon-clickable" />
        <EllipsisVertical className="icon-clickable" />
      </div>
    </div>
  );
}
