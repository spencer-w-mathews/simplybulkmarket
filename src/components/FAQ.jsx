import React from "react";
import styled from "styled-components";

const FAQ = () => {
  return (
    <Container>
      <Heading>Bulk FAQs</Heading>
      <Subheading>
        Below are some common questions and answers about bulk shopping in general and specific to our store.
      </Subheading>

      <FaqList>
        <FaqItem>
          <Question>Q. Can I use my own containers?</Question>
          <Answer>
            A. Absolutely! We encourage this, as it is part of the process of reducing unnecessary packaging. We welcome any clean, hard-sided container that you are comfortable using, such as mason jars, plastic bottles, etc.
          </Answer>
        </FaqItem>

        <FaqItem>
          <Question>Q. Is there a minimum or maximum amount I can buy?</Question>
          <Answer>
            A. Short answer: No. Long answer: You can buy just what you want or need, which helps in trying new items out. You are always welcome to buy the total amount of any product that we have in stock.
          </Answer>
        </FaqItem>

        <FaqItem>
          <Question>Q. Order discounts</Question>
          <Answer>
            A. 15% off the total retail price for full unopened packages for any item in the store.
          </Answer>
        </FaqItem>

        <FaqItem>
          <Question>Q. Special Orders</Question>
          <Answer>
            A. Stop by, and we can discuss your needs and our ability to make something happen.
          </Answer>
        </FaqItem>

        <FaqItem>
          <Question>Q. If I do not have my own containers, how can I purchase your products?</Question>
          <Answer>
            A. We sell small to mid-size containers for most everything.
          </Answer>
        </FaqItem>
      </FaqList>
    </Container>
  );
};

export default FAQ;


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

const FaqList = styled.div`
  margin-top: 2rem;
`;

const FaqItem = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;

  &:last-of-type {
    border-bottom: none;
  }
`;

const Question = styled.h3`
  font-size: 1.2rem;
  color: #2a6f42;
  margin-bottom: 0.5rem;
`;

const Answer = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-left: 1rem;
`;
