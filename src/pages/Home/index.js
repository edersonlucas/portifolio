import React from 'react';
import { Container, ContainerText, ButtonLink, ContainerLink } from './styles';
import ImageDevelopment from '../../images/home-images/development.svg';
import { FileArrowDown, LinkedinLogo } from 'phosphor-react';

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
          <h1>{`<Desenvolvedor Web Full Stack/>`}</h1>
          <h2>{`Seja Bem-Vindo(a) ao Meu Portfólio`}</h2>
          <ContainerLink>
            <ButtonLink target="_blank" href='https://www.linkedin.com/in/edersonlucas/'>
              <LinkedinLogo size={32} />
              Conectar
            </ButtonLink>
            <ButtonLink target="_blank" href='https://drive.google.com/file/d/1kMJFN9SXOLtYMLnNghguMwFYmQw4OCEe/view?usp=share_link'>
              <FileArrowDown size={30} />
              Baixar CV
            </ButtonLink>
          </ContainerLink>
        </ContainerText>
        <img alt="ilustração de um desenvolvedor sentado em cima de um notebook codando" src={ ImageDevelopment } />
      </Container>
    )
  }
}

export default Home;