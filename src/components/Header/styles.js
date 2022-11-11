import styled, { css } from 'styled-components';

const Container = styled.header`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: rgb(48, 48, 50, 0.9);
  color: white;
  position: fixed;
  z-index: 9;
  backdrop-filter: blur(4px);
`;

const Button = styled.button`
    position: absolute;
    right: 50px;
    margin-left: 10px;
    border: none;
    background: transparent;

    svg {
    color: rgba(195, 58, 252);
    font-size: 2rem;
  }

  #close {
    position: absolute;
    bottom: -14px;
    opacity: 0;
    transition: all 0.5s;
  }

  #menu {
    opacity: 1;
    position: absolute;
    bottom: -14px;
    transition: all 0.5s;
  }

    &:hover {
      cursor: pointer;
      svg {
        opacity: 0.9;
      }
    }

    ${({ clickMenu }) => clickMenu && css`
    #menu {
      opacity: 0;
      transform: rotate(90deg);
    }
    #close {
    opacity: 1;
    transform: rotate(90deg);
  }
  `}

  @media screen and (min-width: 768px) {
    &{
      display: none;
    }
  }
`;

const ContainerLinks = styled.nav`
  display: flex;

  a{
    text-decoration: none;
    color: white;
    font-weight: 700;
    margin: 10px;
    transition: all 0.3s;
  }

  a:hover {
    color: rgba(195, 58, 252);
    filter: drop-shadow( 3px 3px 7px rgba(195, 1, 252));
  }

  a:active {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    &{
      display: none;
    }
  }
`

export { Container, Button, ContainerLinks };