import React from "react";
// import { Button } from "@mui/material";
import { auth } from "../firebase";
// import CallIcon from "@mui/icons-material/Call";

function SignOut() {
  return (
    <div className="header">
      <button
        onClick={() => auth.signOut()}
        style={{ color: "black", fontSize: "15px" }}
      >
        サインアウト
      </button>
      <h3>{auth.currentUser.displayName}</h3>
    </div>
  );
}

export default SignOut;
