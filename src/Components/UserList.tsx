import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useActions } from "../Hooks/useActions";
import { useTypedSelector } from "../Hooks/useTypedSelector";
import { fetchUsers } from "../Store/Action-creators/users";

const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Downloading users!</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
