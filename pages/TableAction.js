import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import AddUser from './AddUser';
import UserList from './UserList';
const Home = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        User Management
      </Typography>

      <AddUser onAdd={handleAddUser} />
      <UserList users={users} onDelete={handleDeleteUser} />
    </Container>
  );
};

export default Home;
