import React from "react";
import Add from "../image/addAvatar.png";
export const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img src={Add} alt="" />
        <p>Just now</p>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* <img src={Add} alt="" /> */}
      </div>
    </div>
  );
};
