import React from 'react';
import { Container, ContainerDescription } from './styles';
import LinkIcon from '@mui/icons-material/Link';

function ProjectCard({ project }) {
  const { name, description, alt, image, linkRepo } = project;
  return (
    <Container>
      <h1>{ name }</h1>
      <img alt={ alt } src={ image?.url } />
      <a href={ linkRepo } target="_blank" rel="noreferrer" ><LinkIcon /><span>Acessar Repositório</span></a>
      <ContainerDescription>
        <p>{ description }</p>
      </ContainerDescription>
    </Container>
  )
}

export default ProjectCard;