import React from "react";
import Meta from "components/Meta";
import CardHero from "components/CardHero";
import { Container } from "react-bootstrap";

const pageName = "Bridges"

function Bridges(props) {
  return (
    <Container>
      <Meta title={pageName} />
      <CardHero title={pageName} src="https://i.picsum.photos/id/744/600/600.jpg?hmac=QWR3QPePRzXNfGvesobnH-txrq5qWSN9PkGmh1VJD1w"/>
    </Container>

  );
}

export default Bridges;