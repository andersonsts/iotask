import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Logo, Navigation, NavItem } from './styles';

export default function HeaderComponet() {
  return (
    <Header>
      <Logo>
        <span>iO</span>
        <strong>TASKS</strong>
      </Logo>

      <Navigation>
        <NavItem active={false}>
          <Link to="/">Tarefas</Link>
        </NavItem>
        <NavItem active>
          <Link to="/user/1">Usuários</Link>
        </NavItem>
      </Navigation>
    </Header>
  );
}
