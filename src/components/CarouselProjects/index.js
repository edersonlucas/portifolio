import React from 'react';
import { Container, ContainerCarousel } from './styles';
import ProjectCard from '../ProjectCard'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

class CarouselProjects extends React.Component {
  carousel = React.createRef();

  handleLeftClick = () => {
    const { current } = this.carousel
    current.scrollLeft -= current.offsetWidth;
  }

  handleRightClick = () => {
    const { current } = this.carousel
    current.scrollLeft += current.offsetWidth;
  }
  
  componentDidMount() {
    const { current } = this.carousel
    setInterval(() => {
      if( current.scrollLeft + 10 >= current.scrollWidth - current.offsetWidth) {
        current.scrollLeft = 0;
      } else {
        current.scrollLeft += current.offsetWidth;
      }
    },5500)
  }

  render() {
    return (
      <Container>
        <ContainerCarousel ref={ this.carousel }>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ContainerCarousel>
        <div>
          <button onClick={ this.handleLeftClick }><ArrowBackIosNewIcon /></button>
          <button onClick={ this.handleRightClick }><ArrowForwardIosIcon /></button>
        </div>
      </Container>
    )
  }
}

export default CarouselProjects;