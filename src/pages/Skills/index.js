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
    changedSkill: false,
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
      changedSkill: false,
    })
  }

  clickSkill = (skill) => {
    const { asideIsOpen, selectedSkill } = this.state;
    if( asideIsOpen && selectedSkill.name !== skill.name ) {
      this.closeAsideSkill();
      setTimeout(() => {
        this.setState({
          changedSkill: true,
          asideIsOpen: true,
          selectedSkill: skill,
        });
      },550)
    } else {
      this.setState((prevState) => ({
        changedSkill: !prevState.changedSkill,
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
    const { revealElements, elementNeon, selectedSkill, asideIsOpen, changedSkill } = this.state;
    const logosSkills = [
      {
        name: 'HTML5',
        alt: 'logo HTML5',
        description: 'HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML',
        source: logoHtml,
      },
      {
        name: 'CSS3',
        alt: 'logo CSS3',
        description: 'Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.',
        source: logoCss,
      },
      {
        name: 'JAVASCRIPT',
        alt: 'logo JAVASCRIPT',
        description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',
        source: logoJavaScript,
      },
      {
        name: 'JEST',
        alt: 'logo JEST',
        description: 'Jest é uma estrutura de teste JavaScript mantida pela Meta, projetada e construída por Christoph Nakazawa com foco na simplicidade e suporte para grandes aplicativos da web. Trabalha com projetos usando Babel, TypeScript, Node.js, React, Angular, Vue.js e Svelte.',
        source: logoJest,
      },
      {
        name: 'REACT',
        alt: 'logo REACT',
        description: 'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.',
        source: logoReact,
      },
      {
        name: 'STYLED COMPONENTS',
        alt: 'logo STYLED COMPONENTS',
        description: 'Styled-Components é uma biblioteca para React e React Native que permite que você use estilos ao nível de componente na sua aplicação. Eles são escritos em uma mistura de JavaScript com CSS.',
        source: logoStyledComponents,
      },
      {
        name: 'BOOTSTRAP',
        alt: 'logo BOOTSTRAP5',
        description: 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.',
        source: logoBootstrap,
      },
      {
        name: 'MATERIAL UI',
        alt: 'logo MATERIAL UI',
        description: 'O Material-UI começou como uma implementação do React da especificação do Material Design do Google em 2014. O objetivo era simples, dar aos desenvolvedores do React o direito de usar o Material Design.',
        source: logoMaterialUi,
      }
    ]
    return (
      <Container neon = { elementNeon } revel={ revealElements }>
        <ContainerLogos revel={ revealElements }>
          { logosSkills.map((skill) => <SkillCard onClick={ () => this.clickSkill(skill)} skill={ skill } />) }
        </ContainerLogos>
        <img id="imagestudying" alt="ilustração pessoa lendo um livro" src={ imageStudying } />
        <AsideSkill changedSkill={ changedSkill } closeAside={ this.closeAsideSkill } isOpen={ asideIsOpen } skill={ selectedSkill } />
      </Container>
    )
  }
}

export default Skills;