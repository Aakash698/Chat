import React from "react";
import More from "../image/addAvatar.png";
import { Messages } from "./Messages";
import { Input } from "./Input";
export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={More} alt="" />
          <img src={More} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
