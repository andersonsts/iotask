import React from 'react';
import { Link } from 'react-router-dom';

import { Status, Table } from './styles';

export default function TableComponent({ ready, tasks, taskOnly = false }) {
  return (
    <Table ready={ready}>
      <thead>
        <tr>
          <th>TAREFAS</th>
          {taskOnly ? '' : <th>RESPONSÁVEL</th>}
          <th>
            <div>STATUS</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            {taskOnly ? (
              ''
            ) : (
              <td>
                <Link to={`/user/${task.userId}`}>{task.user.name}</Link>
              </td>
            )}
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
  );
}
