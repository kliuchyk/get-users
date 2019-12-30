import React from "react";

const User = ({ details }) => {
  const { firstName, lastName, dob } = details;
  return <div>{`${firstName} ${lastName}`}</div>;
};

export default User;
