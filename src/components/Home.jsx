import React from "react";
import styledComponents from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less than a New Roof Plus Solar Panels"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        leftBtnText="Order Now"
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
}

const Container = styledComponents.div`
    height: 100vh;
    // background-color: red;
`;

export default Home;
