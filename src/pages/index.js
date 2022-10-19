import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Meta from "components/Meta";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import WhyChoose from "components/WhyChoose";
import CardHero from "components/CardHero";
import OurReviews from "components/OurReviews";
import ContactCard from "components/ContactCard";

function IndexPage(props) {
  return (
    <>
      <Meta title="Fountain Hills Dentist - Loving Family Dental" description="Loving Family Dental locationed in Fountain Hills, Arizona." />
      <Container>
        <CardHero title="Loving Family Dental" src="https://isteam.wsimg.com/ip/c3fdad59-885b-4a54-a02e-8b0428b0e5cd/IMG_7606.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m"/>
        <WhyChoose/>
        <OurReviews/>
        <ContactCard/>
      </Container>
    </>
  );
}

export default IndexPage;
