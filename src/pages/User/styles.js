import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export const Container = styled.div``;

export const CardUser = styled.div`
  transition: opacity 0.2s ease-in;
  opacity: ${(props) => (props.ready ? '1' : '0')};
  box-shadow: 0px 0px 15px #eee;
  width: 1130px;
  background: #fff;
  margin: 33px auto;
  display: flex;
  align-items: center;
  padding: 40px;
  border-radius: 4px;

  img {
    height: 132px;
    width: 132px;
    border-radius: 50%;
    margin-right: 48px;
  }
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 18px;
    color: #434343;
    margin-bottom: 8px;
    font-weight: bold;
  }

  span {
    font-size: 16px;
    color: #252631;
    margin-bottom: 8px;
    font-weight: 400;
  }

  p {
    font-size: 16px;
    color: #143ea3;
    font-weight: 400;
    text-decoration: underline;
    margin-bottom: 6px;
  }

  small {
    color: #777;
    font-size: 14px;
    margin: 3px 0px;
    display: flex;
    align-items: center;

    > svg {
      margin-right: 4px;
    }
  }
`;

export const Loading = styled(Loader)`
  position: absolute;
  top: 40%;
  left: calc(50% - 50px);
  height: 100%;
`;
