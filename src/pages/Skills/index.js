import React from 'react';
import logoReact from '../../images/skills-images/skills-icons/react-2.svg';
import logoHtml from '../../images/skills-images/skills-icons/html-1.svg';
import logoCss from '../../images/skills-images/skills-icons/css-3.svg';
import logoJavaScript from '../../images/skills-images/skills-icons/javascript-1.svg';
import logoJest from '../../images/skills-images/skills-icons/jest-2.svg';
import logoStyledComponents from '../../images/skills-images/skills-icons/styled-components-1.svg';
import logoBootstrap from '../../images/skills-images/skills-icons/bootstrap-5-1.svg';
import logoMaterialUi from '../../images/skills-images/skills-icons/material-ui-1.svg';
import imageStudying from '../../images/skills-images/Books_SVG.svg';
import { Container, ContainerLogos } from './styles';
import SkillCard from '../../components/SkillCard';
import AsideSkill from '../../components/AsideSkill';

class Skills extends React.Component {
  state = {
    revealElements: false,
    elementNeon: false,
    selectedSkill: {},
    asideIsOpen: false,
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

  closeAsideSkill = () => {
    this.setState({
      asideIsOpen: false,
    })
  }

  clickSkill = (skill) => {
    const { asideIsOpen, selectedSkill } = this.state;
    if( asideIsOpen && selectedSkill.name !== skill.name ) {
      this.closeAsideSkill();
      setTimeout(() => {
        this.setState({
          asideIsOpen: true,
          selectedSkill: skill,
        });
      },550)
    } else {
      this.setState((prevState) => ({
        asideIsOpen: !prevState.asideIsOpen,
        selectedSkill: skill,
      }));
    }
  }
  
  componentDidMount() {
    this.animatedElement();
    window.scrollTo(0, 0);
  }

  render() {
    const { revealElements, elementNeon, selectedSkill, asideIsOpen } = this.state;
    const logosSkills = [
      {
        name: 'HTML5',
        alt: 'logo HTML5',
        description: 'HTML5 ?? uma linguagem de marca????o para a World Wide Web e ?? uma tecnologia chave da Internet, originalmente proposto por Opera Software. ?? a quinta vers??o da linguagem HTML',
        source: logoHtml,
      },
      {
        name: 'CSS3',
        alt: 'logo CSS3',
        description: 'Cascading Style Sheets ?? um mecanismo para adicionar estilo a um documento web. O c??digo CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Tamb??m ?? poss??vel, em vez de colocar a formata????o dentro do documento, criar um link para um arquivo CSS que cont??m os estilos.',
        source: logoCss,
      },
      {
        name: 'JAVASCRIPT',
        alt: 'logo JAVASCRIPT',
        description: 'JavaScript ?? uma linguagem de programa????o interpretada estruturada, de script em alto n??vel com tipagem din??mica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript ?? uma das tr??s principais tecnologias da World Wide Web.',
        source: logoJavaScript,
      },
      {
        name: 'JEST',
        alt: 'logo JEST',
        description: 'Jest ?? uma estrutura de teste JavaScript mantida pela Meta, projetada e constru??da por Christoph Nakazawa com foco na simplicidade e suporte para grandes aplicativos da web. Trabalha com projetos usando Babel, TypeScript, Node.js, React, Angular, Vue.js e Svelte.',
        source: logoJest,
      },
      {
        name: 'REACT',
        alt: 'logo REACT',
        description: 'O React ?? uma biblioteca JavaScript de c??digo aberto com foco em criar interfaces de usu??rio em p??ginas web. ?? mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. ?? utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.',
        source: logoReact,
      },
      {
        name: 'STYLED COMPONENTS',
        alt: 'logo STYLED COMPONENTS',
        description: 'Styled-Components ?? uma biblioteca para React e React Native que permite que voc?? use estilos ao n??vel de componente na sua aplica????o. Eles s??o escritos em uma mistura de JavaScript com CSS.',
        source: logoStyledComponents,
      },
      {
        name: 'BOOTSTRAP',
        alt: 'logo BOOTSTRAP5',
        description: 'Bootstrap ?? um framework web com c??digo-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplica????es web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experi??ncia do usu??rio em um site amig??vel e responsivo.',
        source: logoBootstrap,
      },
      {
        name: 'MATERIAL UI',
        alt: 'logo MATERIAL UI',
        description: 'O Material-UI come??ou como uma implementa????o do React da especifica????o do Material Design do Google em 2014. O objetivo era simples, dar aos desenvolvedores do React o direito de usar o Material Design.',
        source: logoMaterialUi,
      }
    ]
    return (
      <Container neon = { elementNeon } revel={ revealElements }>
        <ContainerLogos revel={ revealElements }>
          { logosSkills.map((skill) => <SkillCard onClick={ () => this.clickSkill(skill)} skill={ skill } />) }
        </ContainerLogos>
        <img alt="ilustra????o pessoa lendo um livro" src={ imageStudying } />
        <AsideSkill closeAside={ this.closeAsideSkill } isOpen={ asideIsOpen } skill={ selectedSkill } />
      </Container>
    )
  }
}

export default Skills;