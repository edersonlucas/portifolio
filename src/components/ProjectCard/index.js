import React from 'react';
import Container from './styles';
import imageTrybeTunes from '../../images/projects-images/images-of-projects/project_trybetunes.png';
import LinkIcon from '@mui/icons-material/Link';

class ProjectCard extends React.Component {
  render() {
    return (
      <Container>
        <h1>TrybeTunes</h1>
        <img alt="imagem do projeto trybetunes" src={ imageTrybeTunes } />
        <a href="https://edersontunes.vercel.app" target="_blank" rel="noreferrer" ><LinkIcon /><span>Ver Projeto</span></a>
      </Container>
    )
  }
}

export default ProjectCard;