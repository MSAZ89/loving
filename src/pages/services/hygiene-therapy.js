import React from "react";
import Meta from "components/Meta";
import CardHero from "components/CardHero";
import { Container } from "react-bootstrap";

const pageName = "Hygiene Therapy"

function HygieneTherapy(props) {
  return (
    <Container>
      <Meta title={pageName} />
      <CardHero title={pageName}  src="https://i.picsum.photos/id/505/600/600.jpg?hmac=1jzzUVDWeHVUXaWVLODfKx6FKw3eO4I6J-rM8EBV0tA"/>
    </Container>
  );
}

export default HygieneTherapy;