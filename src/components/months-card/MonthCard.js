import React, { useContext } from "react";
import UsersList from "../users-list/UsersList";
import { Context } from "../../context";

const MonthCard = ({ monthName, monthCount }) => {
  const users = useContext(Context);
  const filterdUsers = users.filter((user, idx) => {
    const monthOfBirth = new Date(user.dob).getMonth();

    return monthOfBirth === monthCount ? user : false;
  });

  return (
    <div>
      <h2>{monthName}</h2>
      <UsersList users={filterdUsers} />
    </div>
  );
};

export default MonthCard;
