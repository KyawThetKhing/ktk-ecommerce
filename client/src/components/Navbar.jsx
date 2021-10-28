import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px"
  })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px"
  })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none"
  })};
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Input = styled.input`
  border: none;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
  ${mobile({
    width: "50px"
  })};
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  font-weight: bold;
  ${mobile({
    fontSize: "24px"
  })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center",
    flex: 2
  })};
`;

const MenuItem = styled.div`
  margin: 0 10px;
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px"
  })};
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search
              style={{
                color: "gray",
                fontSize: 16
              }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>KMart</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
