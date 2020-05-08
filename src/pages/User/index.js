import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Table from '../../components/Table';
import CardUser from '../../components/CardUser';

export default function User({ match }) {
  const [user, setUser] = useState({});
  const [userTasks, setUserTasks] = useState({});
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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

      setUserTasks(
        responseTasks.data.filter(
          (task) => task.userId === Number(match.params.userId)
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
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <CardUser ready={ready} user={user} counter={counter} />
          <Table ready={ready} tasks={userTasks} taskOnly />
        </>
      )}
    </>
  );
}
