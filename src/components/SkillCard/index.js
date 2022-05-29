import React from 'react';
import Container from './styles';

class SkillCard  extends React.Component {
  render() {
    const { skill, onClick } = this.props;
    const { alt, name, source } = skill;
    return (
      <Container onClick={ onClick }>
        <img alt={alt} src={ source }/>
        <h3>{name}</h3>
      </Container>
    )
  }
}

export default SkillCard;