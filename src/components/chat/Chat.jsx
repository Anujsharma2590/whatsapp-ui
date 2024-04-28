import "./Chat.css";

import Message from "../message/Message";

export default function Chat({ messages }) {
  return (
    <div className="chat-section">
      {messages.map((m, index) => {
        return (
          <div key={index}>
            <Message
              message={m.message}
              timestamp={m.timestamp}
              theirs={m.from === "them"}
            />
          </div>
        );
      })}
    </div>
  );
}
