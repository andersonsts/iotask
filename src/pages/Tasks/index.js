import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Table from '../../components/Table';
import Loading from '../../components/Loading';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function loadTasks() {
      setLoading(true);

      const [responseUsers, responseTasks] = await Promise.all([
        api.get('/users'),
        api.get('/todos'),
      ]);

      setTasks(
        responseTasks.data.map((task) => ({
          ...task,
          user: responseUsers.data.find((user) => user.id === task.userId),
        }))
      );

      setTimeout(() => {
        setLoading(false);

        setTimeout(() => {
          setReady(true);
        }, 0);
      }, 400);
    }

    loadTasks();
  }, []);

  return (
    <>
      <Header />

      {loading ? <Loading /> : <Table ready={ready} tasks={tasks} />}
    </>
  );
}
