import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  table {
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
        /* background: #eee; */
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

export const Header = styled.header`
  width: 100%;
  height: 64px;
  padding: 18px 62px;
  background: #fff;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: 73px;
  height: 20px;

  span {
    font-size: 20px;
    color: #4d7cfe;
  }

  strong {
    font-size: 20px;
    color: #4d7cfe;
  }
`;

export const Navigation = styled.div`
  margin-left: 90px;
  display: flex;
  align-items: center;

  > div {
    padding: 0 21px;
    height: 30px;
    display: flex;
    align-items: center;

    & + div {
      border-left: 1px solid #efefef;
    }
  }

  a {
    padding: 7px 25px;
    background: ${lighten(0.6, '#143ea3')};
    border-radius: 8px;
    font-size: 18px;
    color: #143ea3;
    font-weight: bold;
    text-decoration: none;
  }
`;
