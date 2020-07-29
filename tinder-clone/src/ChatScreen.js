import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Abhi",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Shri_Narendra_Modi.jpg/330px-Shri_Narendra_Modi.jpg",
      message: "Heyy!!",
    },
    {
      name: "Abhi",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Shri_Narendra_Modi.jpg/330px-Shri_Narendra_Modi.jpg",
      message: "fudifudi!!",
    },
    {
      message: "hey fudi how are you",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU HAVE MATCHED WITH ABHI ON 29/07/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message"
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__button"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
