import React from "react";
import Meta from "components/Meta";
import CardHero from "components/CardHero";
import { Container } from "react-bootstrap";

const pageName = "Cerec Technology"

function CerecTechnology(props) {
  return (
    <Container>
      <Meta title={pageName} />
      <CardHero title={pageName} src="https://i.picsum.photos/id/702/600/600.jpg?hmac=uoGYB3WZc5VP_4lA_slNzB_cnkesjLd8PJMGetW6Lv4"/>
    </Container>

  );
}

export default CerecTechnology;
