import React from "react";
import Meta from "components/Meta";
import ContactSection from "components/ContactSection";

function ContactPage(props) {
  return (
    <>
      <Meta title="Contact" />
      <ContactSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Us"
        subtitle="We strive to make our customers happy! And no, we didn't know about the similarly titled movie. Please stop asking about that."
        buttonText="Send message"
        buttonColor="primary"
        showNameField={false}
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.8801281729257!2d-111.71903228479661!3d33.60841458072905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b988817b0a5db%3A0x23fea187711e6684!2sLoving%20Family%20Dental!5e0!3m2!1sen!2sus!4v1666124671324!5m2!1sen!2sus"
      />
    </>
  );
}

export default ContactPage;
