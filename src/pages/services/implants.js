import React from "react";
import Meta from "components/Meta";
import CardHero from "components/CardHero";
import { Container } from "react-bootstrap";

const pageName = "Implants"

function Implants(props) {
  return (
    <Container>
      <Meta title={pageName} />
      <CardHero title={pageName} src="https://i.picsum.photos/id/484/600/600.jpg?hmac=9OHSJscWrVZfDlxHGHF6sxgB8sKwcvTmft5ItihZ0GU"/>
    </Container>

  );
}

export default Implants;