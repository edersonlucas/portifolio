import React from 'react';
import { Container, Button, ContainerLinks } from './styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
class Header extends React.Component {
  render() {
    const { onClick, menuIsOpen } = this.props;
    return (
      <Container>
        <Button clickMenu={menuIsOpen} onClick={ onClick }><CloseIcon id="close" /><MenuIcon id="menu" /></Button>
        <ContainerLinks>
          <Link to="/">Início</Link>
          <Link to="/skills">Habilidades</Link>
          <Link to="/projects">Projetos</Link>
          <Link>Contato</Link>
        </ContainerLinks>
      </Container>
    )
  }
}

export default Header;