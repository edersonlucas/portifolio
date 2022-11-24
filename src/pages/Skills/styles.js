import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  color: white;
  overflow: hidden;
  height: calc(100vh - 105px);
  margin: auto;
  padding: 20px;

  > img {
    max-width: 300px;
    width: 60%;
    margin: 15px auto;
    transition: all 1s;
    transform: translateX(190%);
    filter: drop-shadow( 3px 3px 1px rgba(195, 1, 252));
  }

  ${({ revel }) => revel && css`
  > img {
    transform: translateX(0%);
  }
  `}

  ${({ neon }) => neon && css`
  > img {
    filter: drop-shadow( 3px 3px 7px rgba(195, 58, 252));
  }
  `}

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    > img {
      display: none;
    }
  }
`

const ContainerLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  width: 100%;
  flex-wrap: wrap;
  transition: all 1s;
  transform: translateX(-190%);
  overflow-y: auto;
  height: 100%;

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

  h3 {
    font-size: 90%;
  }

  ${({ revel }) => revel && css`
    transform: translateX(0%);
  `}
`

export { Container, ContainerLogos };