import React from "react";
import Meta from "components/Meta";
import CarouselSection from "components/CarouselSection";

function ServicesService1Page(props) {
  return (
    <>
      <Meta title="Services Service1" />
      <CarouselSection
        items={[
          {
            image: "http://source.unsplash.com/7v_lSDRaOO0/1200x600",
            caption: "Caption for the first image",
          },
          {
            image: "http://source.unsplash.com/PvCO2IXlXBs/1200x600",
            caption: "Caption for the second image",
          },
          {
            image: "http://source.unsplash.com/dibBJsnVTcc/1200x600",
            caption: "Caption for the third image",
          },
        ]}
      />
    </>
  );
}

export default ServicesService1Page;
