import "./MessageInput.css";

import { Mic, Smile, Plus } from "lucide-react";

export default function MessageInput() {
  return (
    <div className="message-section">
      <Smile className="icon-clickable" />
      <Plus />
      <input className="message-input" placeholder="Type a message" />
      <Mic className="icon-clickable" />
    </div>
  );
}
