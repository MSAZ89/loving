import React from "react";
import "styles/global.scss";
import "styles/components/index.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />

      <Component {...pageProps} />

      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        description=""
        copyright={`© ${new Date().getFullYear()} Loving Family Dental`}
        logo="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/fqtogptgxqezm3cgoax5"
      />
    </>
  );
}

export default MyApp;
