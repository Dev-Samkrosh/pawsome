import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
  top: 0px; /* Ajusta la distancia del borde superior */
  left: 0px; /* Ajusta la distancia del borde izquierdo */
`;

const LogoImage = styled.img`
  width: 100%; /* Ajusta el tamaño de la imagen según tus preferencias */
`;


export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
        <ImageContainer>
            <LogoImage src="https://drive.google.com/thumbnail?id=1hqBKrc6ggoNL-bxeW9Qjs7Gcu2gqV-OE" alt="Pawsome Logo"/>
          </ImageContainer>
          
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Inicio</NavLink>
            <NavLink href={'/products'}>Todos los productos</NavLink>
            <NavLink href={'/cart'}>Carrito ({cartProducts.length-1})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}