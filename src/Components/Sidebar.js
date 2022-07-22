import React from "react";
import "../componentStyles/sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "../Components/SidebarChat";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <Avatar src="https://lh3.googleusercontent.com/ogw/AOh-ky3sxzOVvufDtcwVX2HHsn5pVBy5SajGm_RS0VmH=s32-c-mo" />
        <div className="sidebarHeaderRight ">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebarSearch">
        <div className="sidebarSearchContainer">
          <SearchOutlined />
          <input placeholder="search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebarChats">
        <SidebarChat />
      </div>
    </div>
  );
}

export default SideBar;
