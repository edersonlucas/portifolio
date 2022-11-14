import React, { useState, useEffect } from 'react';
import { Container, ContainerProjects } from './styles';
import ProjectCard from '../../components/ProjectCard'
import { gql, useQuery } from '@apollo/client';
import Loading from '../../components/Loading';

const GET_PROJECT_QUERY = gql`
  query {
    projects {
      name
      description
      alt
      image {
        url(transformation: {document: {output: {format: jpg}}})
      }
      linkRepo
    }
  }
`

function Projects() {

  const { loading, data } = useQuery(GET_PROJECT_QUERY);

  const [ revealElements, setRevealElements ] = useState(false)
  const [ elementNeon, setElementNeon ] = useState(false)

  const animatedElement = () => {
    setTimeout(() => {
      setRevealElements(true)
    }, 100)
    setTimeout(() => {
      setElementNeon(true)
    }, 1100)
  }

  useEffect(() => {
    if(!loading) {
      animatedElement();
      window.scrollTo(0, 0);
    }
  })

    if(loading) return <Loading/>
    return (
      <Container neon = { elementNeon } revel={ revealElements }>
        <ContainerProjects revel={ revealElements }>
        {data?.projects.map((project) => <ProjectCard key={ project.name } project={ project }/>)}
        </ContainerProjects>
      </Container>
    )
}

export default Projects;