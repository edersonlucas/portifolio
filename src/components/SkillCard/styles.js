import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
  transition: all 0.5s;
  max-width: 100px;

  img {
    height: 105px;
    width: 100px;
    margin-bottom: 10px;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-10%);
  }

  &:active {
    opacity: 0.3;
  }
`;

export default Container;