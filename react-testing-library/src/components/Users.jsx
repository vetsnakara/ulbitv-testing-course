import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(users);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <Link data-testid="user-item" to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
