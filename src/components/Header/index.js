import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Header, Logo, Navigation, NavItem } from './styles';

export default function HeaderComponet() {
  const location = useLocation();
  const [select, setSelect] = useState(location.pathname === '/');

  useEffect(() => {
    if (location.pathname === '/') {
      setSelect(true);
      return;
    }

    setSelect(false);
  }, [location]);

  return (
    <Header>
      <Logo>
        <span>iO</span>
        <strong>TASKS</strong>
      </Logo>

      <Navigation>
        <NavItem active={select}>
          <Link to="/">Tarefas</Link>
        </NavItem>
        <NavItem active={!select}>
          <Link to="/users">Usuários</Link>
        </NavItem>
      </Navigation>
    </Header>
  );
}
