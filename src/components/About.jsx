import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Heading>About Us</Heading>
      <Subheading>Learn More About Simply Bulk Market</Subheading>

      <Content>
        <Section>
          <h2>Simply Bulk Market</h2>
          <p>
            Heidi Quince and her husband, Devin, purchased the Zero Waste bulk
            store at <strong>418 Main St., Longmont, CO</strong>.
          </p>
          <p>
            Bins and barrels greet customers as they walk in the door. One
            section has more than 100 jars of spices. The baking section
            features 10 kinds of oats. Sixteen varieties of beans and 18
            varieties of rice share shelf space with cereals, nuts, trail mix,
            and all-natural treats.
          </p>
        </Section>

        <Section>
          <h2>Our Offerings</h2>
            <p><strong>500 different bulk food items</strong></p>
            <p>Containers are sold in-store, or customers can bring their own.</p>
            <p>About 40% of our stock is organic, and the remainder is all-natural.</p>
          <p>
            The store has a pet section in the back, near the toiletries and
            cleaning supplies. Bulk bars of soap are waiting for a buyer to cut
            off as much as they need.
          </p>
        </Section>

        <Section>
          <h2>Why Choose Us?</h2>
          <p>
            Large containers of liquid soaps, skincare products, shampoo,
            detergent, and cleaners allow customers to buy only as much as
            necessary. Some items are locally produced, and only a small
            handful come from outside the U.S.
          </p>
        </Section>
      </Content>
    </Container>
  );
};

export default About;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #2a6f42;
`;

const Subheading = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  margin-top: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.8rem;
    color: #2a6f42;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.5rem;
      color: #444;
      font-size: 1rem;
    }
  }

  strong {
    color: #2a6f42;
  }
`;
