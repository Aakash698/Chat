import React from "react";
import Image from "../image/addAvatar.png";
export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Image} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Image} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
