import React from 'react';

import { Loading } from './styles';

export default function LoadingComponent() {
  return (
    <Loading
      type="Oval"
      color="#B0C4DE"
      height={40}
      width={40}
      timeout={3000}
    />
  );
}
