import React from "react";
import styled from "styled-components";
import matterport from '../matterportscreenshot.png';


const Tour = () => {
  return (
    <Container>
      <Subheading>Virtual Tour</Subheading>
      <MapWrapper>
      <img src={matterport} alt='matterport' style={{  width: '80%', height: 'auto'}}/>
      </MapWrapper>
    </Container>
  );
};

export default Tour;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
  margin-bottom: 10vh;
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
