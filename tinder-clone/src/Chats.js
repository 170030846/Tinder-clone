import React from "react";
import "./Chats.css";
import Chat from "./Chat";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Heyy how's it going"
        timestamp="40 seconds ago"
        profilePic="https://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG24.png"
      />
      <Chat
        name="Modi"
        message="Yo!!!"
        timestamp="30 seconds ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Shri_Narendra_Modi.jpg/330px-Shri_Narendra_Modi.jpg"
      />
      <Chat
        name="Bill Gates"
        message="Hey man"
        timestamp="40 seconds ago"
        profilePic="https://www.freepngimg.com/thumb/bill_gates/23973-7-bill-gates-file-thumb.png"
      />
      <Chat
        name="Elon"
        message="Hey I'm Elon"
        timestamp="60 seconds ago"
        profilePic="https://thumbnail.imgbin.com/23/18/0/imgbin-elon-musk-tesla-motors-spacex-chief-executive-tesla-model-3-others-ZNf4FWpv52Mu0HnhLLrTJuUWt_t.jpg"
      />
    </div>
  );
}
export default Chats;
