import React from 'react';
import Container from './styles';
import imageCoffe from '../../images/projects-images/coffee.svg';
import CarouselProjects from '../../components/CarouselProjects';

class Projects extends React.Component {
  render() {
    return (
      <Container>
        <CarouselProjects />
        <img alt="ilustração de um copo de café" src={ imageCoffe } />
      </Container>
    )
  }
}

export default Projects;