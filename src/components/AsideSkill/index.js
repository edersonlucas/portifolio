import React from 'react';
import { Container, ContainerSkill } from './styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function AsideSkill({ skill, isOpen, closeAside }) {
  const { name, alt, imageSkill, description } = skill;
  return (
    <Container isOpen={ isOpen }>
      <button type="button" onClick={ closeAside }><ArrowForwardIosIcon /></button>
      <ContainerSkill isOpen={ isOpen }>
        <h1>{ name }</h1>
        <img alt={ alt } src={ imageSkill?.url } />
        <p>{ description }</p>
      </ContainerSkill>
    </Container>
  )
}

export default AsideSkill;