import React from 'react';
import { Container, ContainerLinks } from './styles'
import { Link } from 'react-router-dom';
class MenuOpen extends React.Component {
  componentDidUpdate() {
    const { menuIsOpen } = this.props;
    document.body.style.overflowY = menuIsOpen ? 'hidden' : 'auto';
  }
  render() {
    const { onClick, menuIsOpen } = this.props;
    return (
      <Container menuOpen={ menuIsOpen }>
        <ContainerLinks onClick={ onClick }>
          <Link to="/">Início</Link>
          <Link to="/about">Sobre Mim</Link>
          <Link to="/skills">Habilidades</Link>
          <Link to="/projects">Projetos</Link>
        </ContainerLinks>
      </Container>
    )
  }
}

export default MenuOpen;