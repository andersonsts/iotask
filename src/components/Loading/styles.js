import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export const Loading = styled(Loader)`
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  height: 100%;
`;
