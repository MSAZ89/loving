import React from "react";
import Meta from "components/Meta";
import CardHero from "components/CardHero";
import { Container } from "react-bootstrap";

const pageName = "Bridges"

function Bridges(props) {
  return (
    <Container>
      <Meta title={pageName} />
      <CardHero title={pageName}/>
    </Container>

  );
}

export default Bridges;