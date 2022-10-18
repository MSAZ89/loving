import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

function NavbarCustom(props) {
  return (
    <Navbar
      bg={props.bg}
      variant={props.variant}
      expand={props.expand}
      className="mx-auto"
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-1">
            <Link href="/" passHref={true}>
              <Nav.Link active={false}>Home</Nav.Link>
            </Link>
            <NavDropdown title="Services">
              <Link href="/services/service1" passHref={true}>
                <NavDropdown.Item>Service 1</NavDropdown.Item>
              </Link>
              <Link href="/services/service2" passHref={true}>
                <NavDropdown.Item>Service 2</NavDropdown.Item>
              </Link>
              <Link href="/404" passHref={true}>
                <NavDropdown.Item>Service 3</NavDropdown.Item>
              </Link>
              <Link href="/404" passHref={true}>
                <NavDropdown.Item>Service 4</NavDropdown.Item>
              </Link>
              <Link href="/404" passHref={true}>
                <NavDropdown.Item>Service 5</NavDropdown.Item>
              </Link>
              <Link href="/404" passHref={true}>
                <NavDropdown.Item>Service 6</NavDropdown.Item>
              </Link>
              <Link href="/404" passHref={true}>
                <NavDropdown.Item>Service 7</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link href="/patient-forms-and-downloads" passHref={true}>
              <Nav.Link active={false}>Patient Forms & Downloads</Nav.Link>
            </Link>
            <Link href="/about" passHref={true}>
              <Nav.Link active={false}>About</Nav.Link>
            </Link>
            <Link href="/contact" passHref={true}>
              <Nav.Link active={false}>Contact Us</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
