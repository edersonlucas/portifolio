import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
  max-width: 1200px;
  width: 80%;
  height: calc(100vh - 105px);
  margin: auto;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
  }
`

const ContainerProjects = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  transform: translateX(-190%);
  overflow: hidden;
  overflow-y: auto;
  gap: 20px;
  padding: 20px;
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

  ${({ revel }) => revel && css`
    transform: translateX(0%);
  `}

`

export { Container, ContainerProjects }