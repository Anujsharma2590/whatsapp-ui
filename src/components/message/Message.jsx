import "./Message.css";

export default function Message({ message, timestamp, theirs }) {
  function getClassName(theirs) {
    return theirs ? "message-theirs" : "message-us";
  }

  function getTimestamp(timestamp) {
    const date = new Date(timestamp);

    let suffix = "";

    let hours = date.getHours();
    const minutes = date.getMinutes();

    if (hours > 12) {
      suffix = "PM";
      hours -= 12;
    } else {
      suffix = "AM";
    }

    return `${hours}:${minutes} ${suffix}`;
  }

  return (
    <div className={`message-container ${getClassName(theirs)}`}>
      <div className="message">
        <span className="content">{message}</span>
        <span className="timestamp">{getTimestamp(timestamp)}</span>
      </div>
    </div>
  );
}
