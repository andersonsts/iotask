import styled from 'styled-components';

export const Container = styled.div``;

export const CardUser = styled.div`
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
  }

  small {
    color: #777;
    font-size: 14px;
    margin-bottom: 7px;
  }
`;
