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
        title="Patient Forms & Downloads"
        subtitle="Loving Family Dental"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/"
      />
    </>
  );
}

export default PatientFormsAndDownloadsPage;
