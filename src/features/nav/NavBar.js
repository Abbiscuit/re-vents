import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

const NavBar = () => {
  // const history = useHistory();
  const { authenticated } = useSelector(state => state.auth);

  // const [authenticated, setAuthenticated] = useState(false);

  // function handleSignOut() {
  //   setAuthenticated(false);
  //   // Signoutしたらホームへ戻る
  //   history.push('/');
  // }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        <Menu.Item as={NavLink} to="/sandbox" name="Sandbox" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button
              // onClick={() => setFormOpen(true)}
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
        )}

        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
};

export default NavBar;
