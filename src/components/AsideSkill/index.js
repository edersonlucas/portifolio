import React from 'react';
import { Container, ContainerSkill } from './styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class AsideSkill extends React.Component {
  render() {
    const { skill, isOpen, closeAside } = this.props;
    const { name, alt, source, description } = skill;
    return (
      <Container isOpen={ isOpen }>
        <button type="button" onClick={ closeAside }><ArrowForwardIosIcon /></button>
        <ContainerSkill isOpen={ isOpen }>
          <h1>{ name }</h1>
          <img alt={ alt } src={ source } />
          <p>{ description }</p>
        </ContainerSkill>
      </Container>
    )
  }
}

export default AsideSkill;