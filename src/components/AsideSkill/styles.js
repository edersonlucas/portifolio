import styled, { css } from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgb(46, 46, 48, 0.8);
  backdrop-filter: blur(4px);
  z-index: 99;
  transition: all 0.7s;
  transform: translateX(100%);

  button {
    position: absolute;
    margin: 10px;
    top: 0;
    left: 0;
    background: none;
    border: none
  }

  svg {
    color: white;
    font-size: 40px;
  }

  svg:hover {
    cursor: pointer;
    color: rgb(195, 1, 252);
    filter: drop-shadow( 3px 3px 7px rgba(195, 1, 252));
  }

  svg:active {
    opacity: 0.8;
  }

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }

  ${({ isOpen }) => isOpen && css`
    transform: translateX(0%);
  `}
`;

const ContainerSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.6s;
  opacity: 0;
  transform: scale(0);

  h1 {
    color: white;
    text-align: center;
  }

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;
    max-width: 500px;
    width: 80%;
  }

  ${({ isOpen }) => isOpen && css`
    opacity: 1;
    transform: scale(1);
  `}
`

export { Container, ContainerSkill };