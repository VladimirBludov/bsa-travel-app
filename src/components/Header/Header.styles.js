import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiBriefcase } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import Button from 'components/Button';

export const HeaderStyled = styled.header`
  position: relative;
  padding: 10px 20px;
  border-bottom: 1px solid var(--color-gray);
`;

export const Logo = styled(Link)`
  margin: 0;
  color: var(--color-blue-400);
  font-weight: 600;
  font-size: var(--font-size-500);
  font-family: 'Playfair Display', serif;
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container-width);
  margin: 0 auto;
`;

export const Nav = styled.nav`
  position: absolute;
  right: 0;
  height: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  border-left: 1px solid var(--color-gray);
`;

export const LinkBookings = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  height: 100%;
  transition: background-color 0.2s ease;

  &.active {
    background-color: var(--color-blue-300);
  }

  &:hover {
    background-color: var(--color-blue-300);
  }
`;

export const IconCase = styled(FiBriefcase).attrs({
  size: 24,
  color: '#242a3a',
  alt: 'Icon',
})``;

export const IconProfile = styled(AiOutlineUser).attrs({
  size: 24,
  color: '#242a3a',
  alt: 'Profile icon',
})``;

export const SubMenu = styled.div.attrs({
  tabIndex: 0,
})`
  position: relative;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  height: 100%;

  &:hover .profile-nav__list,
  &:focus .profile-nav__list {
    display: block;
  }
`;

export const SubMenuList = styled.ul.attrs({
  className: 'profile-nav__list',
})`
  position: absolute;
  top: 90%;
  right: 15px;
  z-index: 5;
  display: none;
  min-width: 150px;
  padding: 0;
  list-style: none;
  background-color: var(--color-white);
  border-radius: 1px;
  box-shadow: var(--shadow);

  &:focus-within {
    display: block;
  }
`;

export const SubMenuItem = styled.li`
  padding: 0 10px 10px;
  text-align: center;

  &:first-child {
    padding-top: 10px;
  }
`;

export const ButtonSignOut = styled(Button)`
  min-height: auto;
`;
