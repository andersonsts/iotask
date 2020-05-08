import styled from 'styled-components';
import { lighten } from 'polished';

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
`;

export const NavItem = styled.div`
  padding: 0 21px;
  height: 30px;
  display: flex;
  align-items: center;

  & + div {
    border-left: 1px solid #efefef;
  }

  a {
    padding: 7px 25px;
    background: ${(props) =>
      props.active ? `${lighten(0.6, '#143ea3')}` : 'transparent'};
    border-radius: 8px;
    font-size: 18px;
    color: ${(props) => (props.active ? '#143ea3' : '#434343')};
    font-weight: ${(props) => (props.active ? `bold` : '400')};
    text-decoration: none;
    transition: all 140ms ease-in-out;
  }
`;
