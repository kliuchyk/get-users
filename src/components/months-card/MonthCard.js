import React, { useState, useContext } from "react";
import UsersList from "../users-list/UsersList";
import { Context } from "../../context";
import "./MonthCard.css";

const MonthCard = ({ monthName, monthCount }) => {
  const [isShown, setIsShown] = useState(false);
  const users = useContext(Context);
  const filterdUsers = users.filter((user, idx) => {
    const monthOfBirth = new Date(user.dob).getMonth();

    return monthOfBirth === monthCount ? user : false;
  });

  const setBgColor = users => {
    if (users <= 2) {
      return "grey";
    } else if (users >= 11) {
      return "red";
    } else if (users >= 7 && users <= 10) {
      return "green";
    } else if (users >= 3 && users <= 6) {
      return "blue";
    }
  };

  return (
    <div className="month-card">
      <h2
        style={{
          backgroundColor: setBgColor(filterdUsers.length)
        }}
        className="month-name"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {monthName}
      </h2>
      <UsersList users={filterdUsers} isShown={isShown} />
    </div>
  );
};

export default MonthCard;
