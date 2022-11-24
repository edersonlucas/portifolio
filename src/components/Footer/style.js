import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  background: rgb(48, 48, 50, 0.9);
  color: white;
  z-index: 9;
  backdrop-filter: blur(4px);

  @media screen and (max-width: 400px) {
    > p {
      font-size: 0.8rem;
    }
  }
`

export { Container }