import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

const NavBar = ({ setFormOpen }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Menu inverted>
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        <Menu.Item as={NavLink} to="/createEvent">
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content="Create Event"
          />
        </Menu.Item>
        {authenticated ? (
          <SignedInMenu setAuthenticated={setAuthenticated} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
