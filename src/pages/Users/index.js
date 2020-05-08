import React, { useEffect, useState } from 'react';
import { MdWeb, MdPhoneIphone } from 'react-icons/md';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, CardUser, InfoUser, Loading } from './styles';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);

      const response = await api.get('users');

      setUsers(response.data);

      setTimeout(() => {
        setLoading(false);

        setTimeout(() => {
          setReady(true);
        }, 0);
      }, 400);
    }

    loadUsers();
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
        users.map((user) => (
          <CardUser ready={ready}>
            <img
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt={user.name}
            />
            <InfoUser>
              <strong>{user.name}</strong>
              <span>{user.email}</span>
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
        ))
      )}
    </Container>
  );
}
