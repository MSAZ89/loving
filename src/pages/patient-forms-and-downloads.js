import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";

function PatientFormsAndDownloadsPage(props) {
  return (
    <>
      <Meta title="Patient Forms And Downloads" />
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Patient Forms"
        subtitle="Loving Family Dental"
        image="/logo.png"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/"
      />
    </>
  );
}

export default PatientFormsAndDownloadsPage;
