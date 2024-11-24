import React from "react";
import styled from "styled-components";

const Location = () => {
  return (
    <Container>
      <Subheading>Visit Us at Our Location</Subheading>
      <MapWrapper>
      <iframe 
      title="Simply Bulk Market Location"
       width="100%"
       height="400"
       style={{ border: 0 }} 
       loading="lazy" 
       allowfullscreen 
       src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJG_jpygr5a4cRBxzMtuS2hSU&key=${process.env.REACT_APP_Google_Map}`}
       ></iframe>
      </MapWrapper>

      {/* Info Section */}
      <Info>
        <h3>Address</h3>
        <p>418 Main Street, Longmont CO 80501, USA</p>

        <h3>Hours of Operation</h3>
        <ul>
          <li>Mon - Fri: 9:00 am - 6:00 pm</li>
          <li>Sat: 9:00 am - 5:00 pm</li>
          <li>Sun: 10:00 am - 4:00 pm</li>
        </ul>

        <h3>Contact Us</h3>
        <p>
          <strong>Phone:</strong> 303-678-7069
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@simplybulkmarket.com">
            info@simplybulkmarket.com
          </a>
        </p>
      </Info>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
`;

const Subheading = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
`;

const MapWrapper = styled.div`
  margin: 2rem 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const Info = styled.div`
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #2a6f42;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;

    li {
      margin: 0.5rem 0;
    }
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
