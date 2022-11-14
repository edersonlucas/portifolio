import React, { useEffect, useState } from 'react';
import imageStudying from '../../images/skills-images/Books_SVG.svg';
import { Container, ContainerLogos } from './styles';
import SkillCard from '../../components/SkillCard';
import AsideSkill from '../../components/AsideSkill';
import { gql, useQuery } from '@apollo/client';
import Loading from '../../components/Loading';

const GET_SKILL_QUERY = gql`
  query {
    skills {
      name
      description
      alt
      imageSkill {
        url
      }
    }
  }
`

function Skills() {

  const { loading, data } = useQuery(GET_SKILL_QUERY);

  const [ revealElements, setRevealElements ] = useState(false)
  const [ elementNeon, setElementNeon ] = useState(false)
  const [ selectedSkill, setSelectedSkill ] = useState({})
  const [ asideIsOpen, setAsideIsOpen ] = useState(false)


  const animatedElement = () => {
    setTimeout(() => {
      setRevealElements(true)
    }, 100)
    setTimeout(() => {
      setElementNeon(true)
    }, 1100)
  }

  const clickSkill = (skill) => {
    if( asideIsOpen && selectedSkill.name !== skill.name ) {
      setAsideIsOpen(false)
      setTimeout(() => {
        setAsideIsOpen(true)
        setSelectedSkill(skill)
      },550)
    } else {
      setAsideIsOpen(!asideIsOpen)
      setSelectedSkill(skill)
    }
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
        <ContainerLogos revel={ revealElements }>
          { data.skills.map((skill) => <SkillCard onClick={ () => clickSkill(skill)} skill={ skill } />) }
        </ContainerLogos>
        <img alt="ilustração pessoa lendo um livro" src={ imageStudying } />
        <AsideSkill closeAside={ () => setAsideIsOpen(!asideIsOpen) } isOpen={ asideIsOpen } skill={ selectedSkill } />
      </Container>
    )
}

export default Skills;