import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  max-width: 1200px;
  width: 95%;
  min-height: calc(100vh - 170px);
  overflow: hidden;
  margin: 120px auto 50px;

  > img {
    max-width: 300px;
    width: 100%;
    filter: drop-shadow( 3px 3px 7px rgba(195, 58, 252));
    margin-left: 50px;
  }

  @media screen and (max-width: 1150px) {
    flex-direction: column;

    > img {
      margin: 20px 0;
    }
  }
`

export default Container