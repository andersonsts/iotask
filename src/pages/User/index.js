import React, { useEffect, useState } from 'react';
import { MdWeb, MdPhoneIphone } from 'react-icons/md';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, CardUser, InfoUser, Loading } from './styles';

export default function User({ match }) {
  const [user, setUser] = useState({});
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function loadUser() {
      setLoading(true);

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

      setTimeout(() => {
        setLoading(false);

        setTimeout(() => {
          setReady(true);
        }, 0);
      }, 400);
    }

    loadUser();
  }, [match.params.userId]);

  return (
    <Container>
      <Header />
      {loading ? (
        <Loading
          type="Oval"
          color="#B0C4DE"
          height={40}
          width={40}
          timeout={3000}
        />
      ) : (
        <CardUser ready={ready}>
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt={user.name}
          />
          <InfoUser>
            <strong>{user.name}</strong>
            <span>{user.email}</span>
            <p>{counter} Tarefas Pendentes</p>
            <small>
              <MdWeb />
              {user.website}
            </small>
            <small>
              <MdPhoneIphone />
              {user.phone}
            </small>
          </InfoUser>
        </CardUser>
      )}
    </Container>
  );
}
