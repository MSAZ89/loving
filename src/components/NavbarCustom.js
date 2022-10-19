import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

function NavbarCustom(props) {

  const dropdownServicesItems = [
    {text: "Cerec Technology", url: "/services/cerec-technology"},
    {text: "Bridges", url: "/services/bridges"},
    {text: "Implants", url: "/services/implants"},
    {text: "Sleep Appliances", url: "/services/sleep-appliances"},
    {text: "Whitening", url: "/services/whitening"},
    {text: "Invisalign Ortho Aligners", url: "/services/invisalign-ortho-aligners"},
    {text: "Hygiene Therapy", url: "/services/hygiene-therapy"},
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
      className="mx-auto p-4">
      <Container className="text-center">
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0 mx-auto" />
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
