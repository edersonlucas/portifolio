import React, { useState, useEffect } from 'react';
import { Container, ContainerText, ButtonLink, ContainerLink } from './styles';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { gql, useQuery } from '@apollo/client';
import Loading from '../../components/Loading';

const GET_ABOUT_QUERY = gql`
  query {
    about(where: {id: "claeuxsw41yxa0blyldgknjvp"}) {
      aboutMe
      instagram
    }
  }
`

function About() {

  const { loading, data } = useQuery(GET_ABOUT_QUERY);

  const [ revealElements, setRevealElements ] = useState(false)
  const [ elementNeon, setElementNeon ] = useState(false)


  const animatedElement = () => {
    setTimeout(() => {
      setRevealElements(true)
    }, 100);
    setTimeout(() => {
      setElementNeon(true)
    }, 1100);
  }

  
  useEffect(() => {
    if(!loading) {
      animatedElement();
      window.scrollTo(0, 0);
    }
  })


    if(loading) return <Loading />
    return (
      <Container neon={ elementNeon } revel={ revealElements }>
        <ContainerText revel={ revealElements }>
          <h1>{`Sobre Mim`}</h1>
          <p>{ data?.about.aboutMe }</p>
          <h2>Redes Sociais</h2>
          <ContainerLink>
            <ButtonLink target="_blank" href='https://www.linkedin.com/in/edersonlucas/'>
              <LinkedinLogo size={32} />
              Linkedin
            </ButtonLink>
            <ButtonLink target="_blank" href='https://github.com/edersonlucas'>
              <GithubLogo size={30} />
              GitHub
            </ButtonLink>
            { data?.about.instagram && (
                <ButtonLink target="_blank" href='https://www.instagram.com/oedersonlucas/'>
                  <InstagramLogo size={30} />
                    Instagram
                </ButtonLink>
            ) }
          </ContainerLink>
        </ContainerText>
        <img alt="foto de ederson lucas" src="https://github.com/edersonlucas.png" />
      </Container>
    )
}

export default About;