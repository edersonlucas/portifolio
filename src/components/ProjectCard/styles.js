import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 300px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 0.4s;
  filter: grayscale(45%);
  text-align: justify;

  > h1 {
    font-size: 1.5rem;
    margin: 5px;
  }

  &:hover {

    filter: grayscale(0%) drop-shadow( 3px 3px 7px rgba(195, 58, 252));

    > a {
      opacity: 1;
      transform: translateY(-230%);
    }
  }

  > img {
    width: 100%;
    height: 100%;
    transition: all 0.4s;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
  }

  > a {
    display: flex;
    text-decoration: none;
    align-items: center;
    position: absolute;
    bottom: 0;
    margin: 10px;
    background: rgba(195, 58, 252);
    max-width: 300px;
    color: white;
    font-size: 1.2rem;
    padding: 15px;
    transition: all 0.7s;
    opacity: 0;
    transform: translateY(50%);
    cursor: pointer;
    border-radius: 10px;
  }

  > button svg {
    color: white;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ContainerDescription = styled.div`
  background: rgb(48, 48, 50);
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
`

export { Container, ContainerDescription }; 