import React from 'react';
import LoadingImage from '../../images/Loading.svg'
import Container from './styles'

function Loading() {
  return (
    <Container>
      <img alt="Loading Icon"src={ LoadingImage }/>
      <h2>Carregando...</h2>
    </Container>
  )
}

export default Loading;