import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  max-width: 1000px;
  width: 80%;
  overflow: hidden;
  margin: auto;
  height: calc(100vh - 105px);
  padding: 20px;

  img {
    max-width: 350px;
    width: 70%;
    border-radius: 50%;
    transition: all 1s;
    margin: 15px auto;
    transform: translateX(160%);
    filter: drop-shadow( 3px 3px 1px rgba(195, 58, 252));
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    img {
      display: none;
    }
  }

  ${({ revel }) => revel && css`
    img {
      transform: translateX(0%);
    }
  `}

  ${({ neon }) => neon && css`
    img {
      filter: drop-shadow( 3px 3px 7px rgba(195, 58, 252));
    }
  `}

`

const ContainerText = styled.div`
  transition: all 1s;
  transform: translateX(-160%);
  margin-right: 50px;
  overflow-y: auto;
  padding: 10px;

  &::-webkit-scrollbar {
      width: 5px;
      border-radius: 5px;
  };

  &::-webkit-scrollbar-track {
    background: rgb(48, 48, 50);
    border-radius: 5px;
  };

  &::-webkit-scrollbar-thumb {
    background: rgba(195, 58, 252);
    border-radius: 5px;
  };

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(206, 110, 246);
  };

  h1 {
    font-size: 2.5rem;
    margin-top: 25px;
  }

  p {
    font-size: 1.1rem;
    margin-top: 25px;
  }

  h2 {
    font-size: 1.5rem;
    margin: 25px 0;
  }

  @media screen and (max-width: 1000px) {
    margin: 0;
    text-align: center;

  h1 {
  font-size: 2.3rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.3rem;
  }
  }

  @media screen and (max-width: 350px) {
    margin: 0;
    text-align: center;

  h1 {
  font-size: 1.6rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1rem;
  }
  }

  ${({ revel }) => revel && css`
    transform: translateX(0%);
  `}

`

const ContainerLink = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  color: white;
  font-weight: 600;
  width: 90%;
  background-color: rgba(195, 58, 252);
  &:hover {
    background-color: white;
    color: rgba(195, 58, 252);
    cursor: pointer;
  };
`

export { Container, ContainerText, ButtonLink, ContainerLink };