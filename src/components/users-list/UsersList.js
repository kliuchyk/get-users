import React from "react";
import User from "../user/User";
import "./UsersList.css";

const UsersList = ({ users, isShown }) => {
  if (isShown) {
    return (
      <ul className="list">
        <span>{users.length}</span>
        {users.map(user => (
          <User key={user.id} details={user} />
        ))}
      </ul>
    );
  }

  return null;
};

export default UsersList;
