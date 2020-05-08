import styled from 'styled-components';
import { lighten } from 'polished';
import Loader from 'react-loader-spinner';

export const Container = styled.div``;

export const Table = styled.table`
  transition: opacity 0.2s ease-in;
  opacity: ${(props) => (props.ready ? '1' : '0')};
  box-shadow: 0px 0px 15px #eee;
  margin: 33px auto;
  padding: 20px 22px 40px 22px;
  background: #fff;
  width: 1130px;
  border-radius: 4px;

  thead {
    font-size: 14px;
    font-weight: bold;
    color: #143ea3;
    text-align: start;

    th {
      &:first-child {
        padding: 0px 25px;
        width: 55%;
      }

      width: 100px;
      text-align: start;

      > div {
        display: flex;
        justify-content: center;
      }
    }
  }

  tbody {
    tr {
      padding: 20px 0px;
      height: 45px;

      &:first-child {
        td {
          padding-top: 30px;
        }
      }

      td {
        padding: 10px 0px;
        font-size: 14px;
        color: #252631;
        border-bottom: 1px solid #e8ecef;

        &:first-child {
          padding-left: 25px;
        }

        > a {
          color: #143ea3;
        }

        > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

export const Status = styled.button`
  border: none;
  border-radius: 4px;
  width: 84px;
  line-height: 17px;
  height: 34px;
  background: ${(props) =>
    props.completed
      ? `${lighten(0.5, '#87B634')}`
      : `${lighten(0.4, '#d74c4c')}`};
  color: ${(props) => (props.completed ? '#87b634' : '#d74c4c')};
  font-size: 14px;
  font-weight: 400;
`;

export const Loading = styled(Loader)`
  position: absolute;
  top: 40%;
  left: calc(50% - 50px);
  height: 100%;
`;
