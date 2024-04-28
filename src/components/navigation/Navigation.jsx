import "./Navigation.css";
import {
  MailPlus,
  ArrowLeft,
  EllipsisVertical,
  Tv2,
  Users,
} from "lucide-react";

export default function Navigation({ navigationOpen, toggleNavigation }) {
  if (navigationOpen) {
    return (
      <div className="navigation-section">
        <ArrowLeft
          onClick={(e) => toggleNavigation()}
          className="back icon-clickable"
        />
        <span className="new-chat">New chat</span>
      </div>
    );
  } else {
    return (
      <div className="navigation-section">
        <img
          alt="profile"
          className="profile-picture"
          src="assets/linkedin-pic.jpeg"
        />
        <div className="actions">
          <Users />
          <Tv2 />
          <MailPlus
            className="icon-clickable"
            onClick={(e) => toggleNavigation()}
          />
          <EllipsisVertical className="icon-clickable" />
        </div>
      </div>
    );
  }
}
