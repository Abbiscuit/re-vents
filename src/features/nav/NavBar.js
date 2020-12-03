import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

const NavBar = ({ setFormOpen }) => {
  return (
    <Menu inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu name="Events" />
        <Menu.Item>
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content="Create Event"
          />
        </Menu.Item>
        <Menu.Item>
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: '0.5em' }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
