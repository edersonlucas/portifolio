import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 35%;
  height: calc(100% - 70px);
  background: rgb(33, 33, 33, 0.8);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  margin-top: 70px;
  transform: translateX(-100%);
  color: rgb(0, 0, 0, 0.8);
  text-align: center;
  transition: all 0.5s;
  z-index: 1;

  @media(max-width: 768px) {
    min-width: 100%;
  }

  ${({ menuOpen }) => menuOpen && css`
    transform: translateX(0);

    html {
      overflow-y: hidden;
    }
  `}

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const ContainerLinks = styled.nav`
  display: flex;
  flex-direction: column;

  a{
    font-size: 2em;
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
`

export { Container, ContainerLinks }