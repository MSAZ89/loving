import React from "react";
import Meta from "components/Meta";
import CardHero from "components/CardHero";
import { Container } from "react-bootstrap";

const pageName = "Sleep Appliances"

function SleepAppliances(props) {
  return (
    <Container>
      <Meta title={pageName} />
      <CardHero title={pageName} src="https://i.picsum.photos/id/339/600/600.jpg?hmac=U6oxWgZwt9H-SM_eOy95ai0vuhJdPMzMllDHlQ9ZFXo"/>
    </Container>

  );
}

export default SleepAppliances;