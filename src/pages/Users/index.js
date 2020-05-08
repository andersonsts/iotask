import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, CardUser, InfoUser } from './styles';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  return (
    <Container>
      <Header />

      {users.map((user) => (
        <CardUser>
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt={user.name}
          />
          <InfoUser>
            <strong>{user.name}</strong>
            <span>{user.email}</span>
            <small>{user.website}</small>
            <small>{user.phone}</small>
          </InfoUser>
        </CardUser>
      ))}
    </Container>
  );
}
