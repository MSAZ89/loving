import React from "react";
import Meta from "components/Meta";
import CardHero from "components/CardHero";
import { Container } from "react-bootstrap";

const pageName = "Whitening"

function Whitening(props) {
  return (
    <Container>
      <Meta title={pageName} />
      <CardHero title={pageName} src="https://i.picsum.photos/id/915/600/600.jpg?hmac=OAUmF8GcjBg9Ouk17n97f9b0UOrv7YryD8m_co6GOf8"/>
    </Container>

  );
}

export default Whitening;