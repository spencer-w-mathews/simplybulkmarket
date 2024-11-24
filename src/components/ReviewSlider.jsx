import styled from "styled-components";
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "John Doe",
    text: "A fantastic zero-waste store with a wonderful variety of bulk options. Staff is always friendly and helpful!",
  },
  {
    name: "Jane Smith",
    text: "Great selection and amazing customer service. Love that I can bring my own containers!",
  },
  {
    name: "Michael Johnson",
    text: "This store has a huge variety of organic and natural products. It’s so satisfying to shop sustainably here.",
  },
  {
    name: "Emily Davis",
    text: "Highly recommend Simply Bulk Market! Their spices and pet supplies are top-notch. A gem in Longmont!",
  },
  {
    name: "Sophia Brown",
    text: "Simply Bulk Market has everything I need in bulk and more. Super eco-friendly and organized.",
  },
];

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <SliderContainer>
      <Title>What Our Customers Say</Title>
      <Stars>
      <FaStar color="gold"/>
      <FaStar color="gold"/>
      <FaStar color="gold"/>
      <FaStar color="gold"/>
      <FaStar color="gold"/>
      </Stars>
      <p>4.9/5 stars on Google</p>
      <Slider {...settings}>
        {reviews.map((review, index) => (
            <div>
                <p>{review.text}</p>
                <p>- {review.name}</p>
            </div>
        //   <ReviewCard key={index}>
        //     <ReviewText>"{review.text}"</ReviewText>
        //     <ReviewerName>- {review.name}</ReviewerName>
        //   </ReviewCard>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ReviewSlider;


const SliderContainer = styled.div`
  margin: auto;
  padding: 2rem 1rem;
  max-width: 800px;
  text-align: center;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Stars = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 10px auto;
`
