import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 0.4s;
  flex: none;

  > h1 {
    margin: 5px;
  }

  &:hover {

    > img {
      filter: blur(3px) grayscale(70%) drop-shadow( 3px 3px 7px rgba(195, 58, 252));
    }

    > a {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  > img {
    width: 100%;
    height: 100%;
    transition: all 0.4s;
    object-fit: cover;
    border-radius: 10px;
  }

  > a {
    display: flex;
    text-decoration: none;
    align-items: center;
    position: absolute;
    bottom: 0;
    margin: 10px;
    background: rgb(46, 46, 48);
    max-width: 300px;
    color: white;
    font-size: 1.3rem;
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

export default Container;