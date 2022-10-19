import React from "react";
import Meta from "components/Meta";
import CardHero from "components/CardHero";
import { Container } from "react-bootstrap";

const pageName = "Invisalign Ortho Aligners"

function InvisalignOrthoAligners(props) {
  return (
    <Container>
      <Meta title={pageName} />
      <CardHero title={pageName} src="https://i.picsum.photos/id/338/600/600.jpg?hmac=LIEhyYn7P6Fkq8NWCjVDYYnidiOrmN0aHb5JyHiVkM8"/>
    </Container>

  );
}

export default InvisalignOrthoAligners;