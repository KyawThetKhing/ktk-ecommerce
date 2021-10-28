import React from "react";
import styled from "styled-components";

const Announcement = () => {
  const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    jusitfy-content: center;
    font-size: 14px;
    font-weight: 500;
  `;
  return <Container>Super Deal! Free Shipping on Orders over $50</Container>;
};

export default Announcement;
