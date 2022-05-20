import React from "react";
import styledComponents from "styled-components";
import Fade from "react-reveal/Fade";

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>

        <ButtonsGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonsGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

const Wrap = styledComponents.div`
    // background-image: url("/images/model-s.jpg");
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styledComponents.div`
    text-align: center;
    padding-top: 15vh;
    h1 {
      margin-bottom: 10px;
    }
`;
const ButtonsGroup = styledComponents.div`
    display: flex;
    margin-bottom: 30px;
    gap: 20px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const LeftButton = styledComponents.div`
    background-color: rgba(23, 26, 32, 0.8);
    color: white;
    width: 250px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    cursor: pointer;
    opacity: 0.85;
    font-size: 15px;
    text-transform: uppercase;
`;

const RightButton = styledComponents(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`;

const Buttons = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DownArrow = styledComponents.img`
    height: 40px;
    margin-top: 20px;
    animation: animatedown infinite 1.5s;
`;

export default Section;
