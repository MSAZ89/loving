import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="About Us"
        subtitle="Loving Family Dental"
        image="/logo.png"
        buttonText="Learn More"
        buttonColor="primary"
        buttonPath="/pricing"
      />
    </>
  );
}

export default AboutPage;
