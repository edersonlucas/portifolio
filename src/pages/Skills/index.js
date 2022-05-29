import React from 'react';
import logoReact from '../../images/skills-images/skills-icons/react-2.svg';
import logoHTML from '../../images/skills-images/skills-icons/html-1.svg';
import logoCSS from '../../images/skills-images/skills-icons/css-3.svg';
import logoJAVASCRIPT from '../../images/skills-images/skills-icons/javascript-1.svg';
import logoJEST from '../../images/skills-images/skills-icons/jest-2.svg';
import logoSTYLEDCOMPONENTS from '../../images/skills-images/skills-icons/styled-components-1.svg';
import logoBOOTSTRAP from '../../images/skills-images/skills-icons/bootstrap-5-1.svg';
import imageStudying from '../../images/skills-images/Books_SVG.svg';
import { Container, ContainerLogos, ContainerLogo } from './styles';

class Skills extends React.Component {
  state = {
    revealElements: false,
    elementNeon: false,
  }

  animatedElement = () => {
    setTimeout(() => {
      this.setState({
        revealElements: true,
      })
    }, 100)
    setTimeout(() => {
      this.setState({
        elementNeon: true,
      })
    }, 1100)
  }

  componentDidMount() {
    this.animatedElement();
    window.scrollTo(0, 0);
  }

  render() {
    const { revealElements, elementNeon } = this.state;
    const logosSkills = [
      {
        name: 'HTML5',
        alt: 'logo HTML5',
        source: logoHTML,
      },
      {
        name: 'CSS3',
        alt: 'logo CSS3',
        source: logoCSS,
      },
      {
        name: 'JAVASCRIPT',
        alt: 'logo JAVASCRIPT',
        source: logoJAVASCRIPT,
      },
      {
        name: 'JEST',
        alt: 'logo JEST',
        source: logoJEST,
      },
      {
        name: 'REACT',
        alt: 'logo REACT',
        source: logoReact,
      },
      {
        name: 'STYLED COMPONENTS',
        alt: 'logo STYLED COMPONENTS',
        source: logoSTYLEDCOMPONENTS,
      },
      {
        name: 'BOOTSTRAP',
        alt: 'logo BOOTSTRAP5',
        source: logoBOOTSTRAP,
      },
    ]
    return (
      <Container neon = { elementNeon } revel={ revealElements }>
        <ContainerLogos revel={ revealElements }>
          { logosSkills.map((logo) => <ContainerLogo>
            <img key={logo.alt} alt={logo.alt} src={ logo.source }/>
            <h3>{logo.name}</h3>
        </ContainerLogo>) }
        </ContainerLogos>
        <img id="imagestudying" alt="ilustração pessoa lendo um livro" src={ imageStudying } />
      </Container>
    )
  }
}

export default Skills;