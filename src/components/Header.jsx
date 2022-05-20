import { React, useState } from "react";
import styledComponents from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [toggle, setToggle] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <NavMenu>
        {cars.map((car, index) => (
          <a key={index} href="">
            {car}
          </a>
        ))}
      </NavMenu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <CustomMenu icon={faBars} onClick={() => setToggle(true)} />
      </RightMenu>
      <BurgerMenu show={toggle}>
        <CloseIconWrap>
          <CloseIcon icon={faClose} onClick={() => setToggle(false)} />
        </CloseIconWrap>
        {cars.map((car, index) => (
          <li>
            <a key={index} href="">
              {car}
            </a>
          </li>
        ))}
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
      </BurgerMenu>
    </Container>
  );
}

const Container = styledComponents.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  z-index: 10;
  justify-content: space-between;
`;

const NavMenu = styledComponents.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }

  a {
    padding:  10px;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;
const RightMenu = styledComponents.div`
    display: flex;
    align-items: center; 

a {
    padding:  10px;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

`;

const CustomMenu = styledComponents(FontAwesomeIcon)`
  cursor: pointer;
   padding:  10px;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
 `;

const CloseIcon = styledComponents(FontAwesomeIcon)`
  padding: 10px;
  cursor: pointer;
`;

const CloseIconWrap = styledComponents.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
`;

const BurgerMenu = styledComponents.div`
    position: fixed;
    background: white;
    color: black;
    top: 0;
    width: 45vh;
    height: 100vh;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 20px;
    transition: transform 0.4s ease-in-out;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(100%)"};
    li {
      list-style: none;
      padding: 20px;
      border-bottom: 1px solid rgba(0,0 ,0,0.3);

      a {
        font-weight: 600;
      }
    }
    
`;

export default Header;
