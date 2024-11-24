import styled from "styled-components";
import React from "react";
import logo from "../logo.png"
import ReviewSlider from "./ReviewSlider";

function Home() {
  return (
    <Container>
      <Header>
        <img src={logo} height='130vh' alt="logo"/>
        <p>
          Zero Waste Bulk Market offering food, spices, pet supplies, personal care items, coffees, teas, and more.
        </p>
      </Header>
      {/* <Hero>
        <h2>Welcome to Simply Bulk Market</h2>
        <p>
          Zero Waste Bulk Market offering food, spices, pet supplies, personal care items, coffees, teas, and more.
        </p>
      </Hero> */}
      <ReviewSlider />

      <Section>
        <h3>What's New</h3>
        <p>
          <a href="#/tour" target="_blank" rel="noreferrer">Check out our new virtual tour!</a>
        </p>
      </Section>

      <Info>
        <h3>Contact Information</h3>
        <div>
          <p>
            <strong>Address:</strong> 418 Main Street, Longmont CO 80501 USA
          </p>
          <p>
            <strong>Phone:</strong> 303-678-7069
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@simplybulkmarket.com">info@simplybulkmarket.com</a>
          </p>
        </div>
      </Info>

      <Hours>
        <h3>Hours of Operation</h3>
        <ul>
          <li>Mon - Fri: 9:00 am - 6:00 pm</li>
          <li>Sat: 9:00 am - 5:00 pm</li>
          <li>Sun: 10:00 am - 4:00 pm</li>
        </ul>
      </Hours>


    </Container>
  );
}

export default Home;


export const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  margin: 0;
  padding: 2rem;
  text-align: center;
`;

export const Header = styled.header`
  text-align: center;
  background: #f4f4f4;
  padding: 1rem 0;
  border-bottom: 2px solid #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Logo = styled.div`
  h1 {
    font-size: 2.5rem;
    color: #2a6f42;
  }
  p {
    font-size: 1.2rem;
    color: #555;
  }
`;

export const Hero = styled.section`
  text-align: center;
  margin: 2rem 0;
  padding: 2rem;
  background: #eafbea;
  border-radius: 10px;

  h2 {
    font-size: 2rem;
    color: #2a6f42;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-top: 1rem;
  }
`;

export const Section = styled.section`
  margin: 2rem 0;
  padding: 1.5rem;
  background: #eafbea;
  border: 1px solid #2a6f42;
  border-radius: 10px;

  h3 {
    font-size: 1.5rem;
    color: #333;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Info = styled.section`
  margin: 2rem 0;

  h3 {
    font-size: 1.5rem;
    color: #2a6f42;
  }

  div {
    margin-top: 1rem;

    p {
      margin-bottom: 0.5rem;
    }

    a {
      color: #007bff;
      text-decoration: none;
    }
  }
`;

export const Hours = styled.section`
  margin: 2rem 0;

  h3 {
    font-size: 1.5rem;
    color: #2a6f42;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;

    li {
      margin: 0.5rem 0;
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0;
  background: #f4f4f4;
  border-top: 2px solid #ddd;
  width: 100%;

  p {
    margin: 0.5rem 0;
  }
`;

export const SocialIcons = styled.div`
  margin: 0.5rem 0;

  a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    color: #2a6f42;

    &:hover {
      color: #1b5230;
    }
  }
`;
