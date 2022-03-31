import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  height: 10%;
  background-color: #111;
  color: lightgray;
  padding: 20px;
  text-align: center;
  margin-top:30px;
`;

const Footer = () => {
  return (
    <Foot>Ange Uwase Ⓒ</Foot>

  );
};

export default Footer;