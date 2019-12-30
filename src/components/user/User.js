import React from "react";

const User = ({ details }) => {
  const { firstName, lastName, dob } = details;
  const date = new Date(dob);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div className="user">
      {`${firstName} ${lastName} - (${month}.${day}.${year})`}
    </div>
  );
};

export default User;
