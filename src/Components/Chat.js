import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "../componentStyles/chat.css";
import {
  AttachFile,
  InsertEmoticon,
  SearchOutlined,
} from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MicIcon from "@mui/icons-material/Mic";

function Chat({}) {
  return (
    <div className="chat">
      <div className="chatHeader">
        <Avatar src="https://lh3.googleusercontent.com/ogw/AOh-ky3sxzOVvufDtcwVX2HHsn5pVBy5SajGm_RS0VmH=s32-c-mo" />
        <div className="chatHeaderInfo">
          <h3>Hifsa</h3>
          <p>Online</p>
        </div>
        <div className="chatHeaderRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chatBody">
        <p className="chatMessage chatMessageSent">
          {/* <span className="chatName">Hifsa</span> */}
          Hi
          <span className="chatTimestamp">Just now</span>
        </p>
        <p className="chatMessage ">
          {/* <span className="chatName">Hifsa</span> */}
          Hi
          <span className="chatTimestamp">Just now</span>
        </p>
        <p className="chatMessage chatMessageSent">
          {/* <span className="chatName">Hifsa</span> */}
          This is Whats App Frontend Clone developed using React JS Framework
          <span className="chatTimestamp">Just now</span>
        </p>
      </div>
      <div className="chatFooter">
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <form>
          <input
            // value={input}
            //  onChange={(e) => setInput(e.target.value)
            placeholder="Type a message"
            type="text"
          />
          <button type="submit">send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
