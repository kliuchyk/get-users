import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch(
      "https://yalantis-react-school.herokuapp.com/api/task0/users"
    );
    const data = await response.json();

    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div></div>;
};

export default App;
