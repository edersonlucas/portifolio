import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 80%;
  min-height: calc(100vh - 170px);
  color: white;
  margin: 120px auto 50px;
  overflow: hidden;

  #imagestudying {
    max-width: 300px;
    width: 60%;
    margin: 15px auto;
    transition: all 1s;
    transform: translateX(190%);
    filter: drop-shadow( 3px 3px 1px rgba(195, 1, 252));
  }

  ${({ revel }) => revel && css`
  #imagestudying {
    transform: translateX(0%);
  }
  `}

  ${({ neon }) => neon && css`
  #imagestudying {
    filter: drop-shadow( 3px 3px 7px rgba(195, 58, 252));
  }
  `}

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
`

const ContainerLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  flex-wrap: wrap;
  margin-right: 50px;
  transition: all 1s;
  transform: translateX(-190%);

  h3 {
    font-size: 90%;
  }

  @media screen and (max-width: 920px) {
    margin: 10px 0;
  }

  ${({ revel }) => revel && css`
    transform: translateX(0%);
  `}
`

export { Container, ContainerLogos };