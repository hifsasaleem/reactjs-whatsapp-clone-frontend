import React from "react";
import { Avatar } from "@mui/material";
import "../componentStyles/sidebarChat.css";
function sidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://lh3.googleusercontent.com/ogw/AOh-ky3sxzOVvufDtcwVX2HHsn5pVBy5SajGm_RS0VmH=s32-c-mo" />
      <div className="sidebarChatInfo">
        <h2>Hifsa</h2>
        <p>Recent message</p>
      </div>
    </div>
  );
}

export default sidebarChat;
