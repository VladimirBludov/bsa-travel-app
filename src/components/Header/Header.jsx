import { useLocation } from 'react-router-dom';
import {
  ButtonSignOut,
  Container,
  HeaderStyled,
  IconCase,
  IconProfile,
  LinkBookings,
  Logo,
  Nav,
  NavItem,
  NavList,
  SubMenu,
  SubMenuItem,
  SubMenuList,
} from './Header.styles';

export default function Header() {
  const { pathname } = useLocation();

  const isAuthPage = pathname === '/sign-up' || pathname === '/sign-in';

  return (
    <HeaderStyled>
      <Container>
        <Logo to="/">Travel App</Logo>
        {!isAuthPage && (
          <Nav>
            <NavList>
              <NavItem title="Bookings">
                <LinkBookings to="/bookings">
                  <span className="visually-hidden">Bookings</span>
                  <IconCase />
                </LinkBookings>
              </NavItem>
              <NavItem title="Profile">
                <SubMenu>
                  <span className="visually-hidden">Profile</span>
                  <IconProfile />
                  <SubMenuList>
                    <SubMenuItem>John Doe</SubMenuItem>
                    <SubMenuItem>
                      <ButtonSignOut text="Sign Out" />
                    </SubMenuItem>
                  </SubMenuList>
                </SubMenu>
              </NavItem>
            </NavList>
          </Nav>
        )}
      </Container>
    </HeaderStyled>
  );
}
