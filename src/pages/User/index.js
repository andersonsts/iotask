import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, CardUser, InfoUser } from './styles';

export default function User({ match }) {
  const [user, setUser] = useState({});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function loadUser() {
      const [responseUsers, responseTasks] = await Promise.all([
        api.get('/users'),
        api.get('/todos'),
      ]);

      setUser(
        responseUsers.data.find(
          (userData) => userData.id === Number(match.params.userId)
        )
      );

      setCounter(
        responseTasks.data.filter(
          (task) =>
            task.userId === Number(match.params.userId) && !task.completed
        ).length
      );
    }

    loadUser();
  }, []);

  return (
    <Container>
      <Header />

      <CardUser>
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt={user.name}
        />
        <InfoUser>
          <strong>{user.name}</strong>
          <span>{user.email}</span>
          <p>{counter} Tarefas Pendentes</p>
        </InfoUser>
      </CardUser>
    </Container>
  );
}
