import React from "react";
import MonthCard from "../months-card/MonthCard";
import { months } from "../../constants";

const MonthsList = () => {
  return (
    <ul>
      {months.map((month, idx) => (
        <MonthCard key={idx} monthName={months[idx]} monthCount={idx} />
      ))}
    </ul>
  );
};

export default MonthsList;
