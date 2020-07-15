import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Collapse,
  Badge,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const cartSize = useSelector(state => state.cart.length);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
        <NavbarBrand href="/">Teste Mentores</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/cart">Meu Carrinho <Badge href="#" color="info">{cartSize}</Badge></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;