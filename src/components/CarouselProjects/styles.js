import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 510px;
  width: 100%;

  > div button {
    margin: 10px;
    background: none;
    border: none;
  }

  > div button:hover {
    cursor: pointer;
  }

  > div button svg {
    color: white;
    font-size: 2rem;
  }
`

const ContainerCarousel = styled.div`
  display: flex;
  gap: 15px;
  max-width: 510px;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`
export { Container, ContainerCarousel };