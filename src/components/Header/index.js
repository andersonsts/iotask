import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Logo, Navigation, Container } from './styles';

export default function HeaderComponent() {
  return (
    <Container>
      <Header>
        <Logo>
          <span>iO</span>
          <strong>TASKS</strong>
        </Logo>

        <Navigation>
          <div>
            <Link to="/">Tarefas</Link>
          </div>
          <div>
            <Link to="/user">Usuários</Link>
          </div>
        </Navigation>
      </Header>

      <table>
        <thead>
          <th>TAREFA</th>
          <th>RESPONSÁVEL</th>
          <th>
            <div>STATUS</div>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>Criar telas</td>
            <td>
              <Link to="/user">Marilia Mendonça</Link>
            </td>
            <td>
              <div>
                <button type="button">Pendente</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Criar telas</td>
            <td>
              <Link to="/user">Marilia Mendonça</Link>
            </td>
            <td>
              <div>
                <button type="button">Feito</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Criar telas</td>
            <td>
              <Link to="/user">Marilia Mendonça</Link>
            </td>
            <td>
              <div>
                <button type="button">Feito</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
