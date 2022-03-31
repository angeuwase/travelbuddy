import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }

`;



const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;

  &:hover{
    text-decoration: underline crimson;
  }
`;


const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;

  &:hover{
    background-color: white;
    color: crimson;
  }
`;

const MenuLabel = styled.label`
  background-color: crimson;
  position: fixed;
  top: 0.8rem;;
  right: 9rem;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  display: none;

  @media only screen and (max-width: 768px) {
    display: inline-block;
  }
`;

const Icon = styled.span`
  position: relative;
  background-color: white;
  width: 1rem;
  height: 1px;
  display: inline-block;
  margin-top: 1rem;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 1rem;
    height: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
  }
  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>travelbuddy</Logo>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Featured Trip</MenuItem>
                <MenuItem>Upcoming Trips</MenuItem>
            </Menu>
            <Button>SIGN UP</Button>
            
        </Wrapper>
        <MenuLabel htmlFor="navi-toggle"> <Icon>&nbsp;</Icon> </MenuLabel>

    </Container>
  )
}

export default Navbar;