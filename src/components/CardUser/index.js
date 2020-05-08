import React from 'react';
import { MdWeb, MdPhoneIphone } from 'react-icons/md';

import { CardUser, InfoUser } from './styles';

export default function CardUserComponent({ ready, user, counter = 0 }) {
  return (
    <CardUser ready={ready}>
      <img
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        alt={user.name}
      />
      <InfoUser>
        <strong>{user.name}</strong>
        <span>{user.email}</span>
        {counter ? <p>{counter} Tarefas Pendentes</p> : ''}
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
  );
}
