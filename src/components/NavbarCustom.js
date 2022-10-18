import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

function NavbarCustom(props) {

  const dropdownServicesItems = [
    {text: "Service 1", url: "/services/service1"},
    {text: "Service 2", url: "/services/service2"},
    {text: "Service 3", url: "/services/service3"},
    {text: "Service 4", url: "/services/service4"},
    {text: "Service 5", url: "/services/service5"},
    {text: "Service 6", url: "/services/service6"},
    {text: "Service 7", url: "/services/service7"},
    {text: "Service 8", url: "/services/service8"},
  ]

  const serviceLinks = dropdownServicesItems.map((item) => {
    return (
      <Link key={item.url} href={item.url} passHref={true}>
        <NavDropdown.Item>{item.text}</NavDropdown.Item>
      </Link>
    )
  });

  return (
    <Navbar
      bg={props.bg}
      variant={props.variant}
      expand={props.expand}
      className="mx-auto p-4"
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Link href="/" passHref={true}>
              <Nav.Link className="px-4" active={false}>Home</Nav.Link>
            </Link>
            <NavDropdown title="Services">
              {serviceLinks}
            </NavDropdown>
            <Link href="/patient-forms-and-downloads" passHref={true}>
              <Nav.Link className="px-4" active={false}>Patient Forms & Downloads</Nav.Link>
            </Link>
            <Link href="/about" passHref={true}>
              <Nav.Link className="px-4" active={false}>About</Nav.Link>
            </Link>
            <Link href="/contact" passHref={true}>
              <Nav.Link className="px-4" active={false}>Contact Us</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
