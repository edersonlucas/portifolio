import React from 'react';
import Container from './styles';

function SkillCard({ skill, onClick }) {

  const { alt, name, imageSkill } = skill;
  return (
    <Container onClick={ onClick }>
      <img alt={alt} src={ imageSkill.url }/>
      <h3>{name}</h3>
    </Container>
  )
}

export default SkillCard;