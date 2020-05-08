import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import CardUser from '../../components/CardUser';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

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
    <>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        users.map((user) => (
          <CardUser key={user.id} ready={ready} user={user} />
        ))
      )}
    </>
  );
}
