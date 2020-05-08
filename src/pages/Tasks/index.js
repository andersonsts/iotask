import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, Status, Table, Loading } from './styles';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
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
        <Table ready={ready}>
          <thead>
            <tr>
              <th>TAREFA</th>
              <th>RESPONSÁVEL</th>
              <th>
                <div>STATUS</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>
                  <Link to={`/user/${task.userId}`}>{task.user.name}</Link>
                </td>
                <td>
                  <div>
                    <Status type="button" completed={task.completed}>
                      {task.completed ? 'Feito' : 'Pendente'}
                    </Status>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
