import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Meta from "components/Meta";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import WhyChoose from "components/WhyChoose";
import CardHero from "components/CardHero";

function IndexPage(props) {
  return (
    <>
      <Meta title="Fountain Hills Dentist - Loving Family Dental" description="Loving Family Dental locationed in Fountain Hills, Arizona." />
      <Container>
        <CardHero title="Loving Family Dental"/>
        <WhyChoose/>
      </Container>
    </>
  );
}

export default IndexPage;
