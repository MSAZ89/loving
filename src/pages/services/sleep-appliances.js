import React from "react";
import Meta from "components/Meta";
import CardHero from "components/CardHero";
import { Container } from "react-bootstrap";

const pageName = "Sleep Appliances"

function SleepAppliances(props) {
  return (
    <Container>
      <Meta title={pageName} />
      <CardHero title={pageName}/>
    </Container>

  );
}

export default SleepAppliances;