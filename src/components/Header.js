import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Restaurant Connoisseur</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header