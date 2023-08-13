import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img src="./image/addAvatar.png" alt="asdf" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};
