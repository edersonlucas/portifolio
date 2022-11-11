import React from 'react';
import { Container, ContainerText, ButtonConnect } from './styles';
import ImageDevelopment from '../../images/home-images/development.svg';

class Home extends React.Component {
  state = {
    revealElements: false,
    elementNeon: false,
  }

  animatedElement = () => {
    setTimeout(() => {
      this.setState({
        revealElements: true,
      })
    }, 100);
    setTimeout(() => {
      this.setState({
        elementNeon: true,
      })
    }, 1100);
  }

  componentDidMount() {
    this.animatedElement();
    window.scrollTo(0, 0);
  }

  render() {
    const { revealElements, elementNeon } = this.state;
    return (
      <Container neon={ elementNeon } revel={ revealElements }>
        <ContainerText revel={ revealElements }>
          <h3>Olá, eu sou <span>Ederson Lucas</span></h3>
          <h1>{`<Desenvolvedor Web FullStack/>`}</h1>
          <h2>{`Seja Bem-Vindo(a) ao Meu Portfólio`}</h2>
          <ButtonConnect target="_blank" href='https://www.linkedin.com/in/edersonlucas/'>Conectar</ButtonConnect>
        </ContainerText>
        <img alt="ilustração de um desenvolvedor sentado em cima de um notebook codando" src={ ImageDevelopment } />
      </Container>
    )
  }
}

export default Home;