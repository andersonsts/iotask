import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  table {
    box-shadow: 0px 0px 15px #eee;
    margin: 33px auto;
    padding: 20px 22px 35px 22px;
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

            > button {
              border: none;
              border-radius: 4px;
              width: 84px;
              line-height: 17px;
              height: 34px;
              background: ${lighten(0.5, '#87B634')};
              color: #87b634;
              font-size: 14px;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
`;
