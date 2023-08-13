import React from "react";

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="search user" />
      </div>
      <div className="userChat">
        <img src="../image/addAvatar.png" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};
