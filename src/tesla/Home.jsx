// import React from "react";
import Header from "./Header.jsx";
import Section from "./Section.jsx";
import "./tesla.css";
import model3 from "./images/model-3.jpg";
import modelS from "./images/model-3.jpg";
import modelX from "./images/model-3.jpg";
import modelY from "./images/model-3.jpg";
import solarRoof from "./images/model-3.jpg";
import model3 from "./images/model-3.jpg";
import model3 from "./images/model-3.jpg";
import model3 from "./images/model-3.jpg";
function Home() {
  return (
    <>
      <Header />
      <Section
        name="Model 3"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgImage={model3}
      />
      <Section
        name="Model S"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgImage=""
      />
      <Section
        name="Model X"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgImage=""
      />
      <Section
        name="Model Y"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgImage=""
      />
      <Section
        name="Solar Panels"
        tagline="Lowest Cost Solar Panels in India"
        leftBtn="Order Now"
        rightBtn="Learn More"
        bgImage=""
      />
      <Section
        name="Solar Roof"
        tagline="Produce Clean Energy from your roof"
        leftBtn="Order Now"
        rightBtn="Learn More"
        bgImage=""
      />
      <Section name="Accessories" leftBtn="Order Now" bgImage="" />
    </>
  );
}

export default Home;

// Section("Model 3", "Neend")
