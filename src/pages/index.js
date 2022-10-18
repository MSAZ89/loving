import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Meta from "components/Meta";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <Container>
        <Card>
          <Card.Img src="https://isteam.wsimg.com/ip/c3fdad59-885b-4a54-a02e-8b0428b0e5cd/IMG_7606.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m" />
        </Card>
        <div className="">
          <h2 className="text-uppercase">Why Choose Loving Family Dental?</h2>
        </div>
      </Container>
    </>
  );
}

export default IndexPage;
