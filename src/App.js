import React, { useState } from 'react';
import Header from './components/Header';
import MenuOpen from './components/MenuOpen';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Skills from './pages/Skills'
import Projects from './pages/Projects';

function App() {

  const [ menuOpen, setMenuOpen ] = useState(false)

    return (
      <>
        <Header menuIsOpen={ menuOpen } onClick={ () => setMenuOpen(!menuOpen) } />
        <MenuOpen onClick={ () => setMenuOpen(!menuOpen) } menuIsOpen={ menuOpen } />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/skills" component={ Skills } />
          <Route path="/projects" component={ Projects } />
        </Switch>
      </>
    )
  }
}

export default App;
