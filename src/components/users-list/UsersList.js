import React from "react";
import User from "../user/User";

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <User key={user.id} details={user} />
      ))}
    </ul>
  );
};

export default UsersList;
