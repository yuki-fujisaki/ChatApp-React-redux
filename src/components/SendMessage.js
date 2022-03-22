// import { Button, Input } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/app";

function SendMessage({ scroll }) {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力して下さい"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <input type="submit" value="送信" />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
