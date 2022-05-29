import React from 'react';
import Header from './components/Header';
import MenuOpen from './components/MenuOpen';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Skills from './pages/Skills'

class App extends React.Component {
  state = {
    menuOpen: false,
  };

  handleMenuClick = () => {
    this.setState((state) => ({
      menuOpen: !state.menuOpen,
    }))
  }
  render() {
    const { menuOpen } = this.state;
    return (
      <div>
        <Header menuIsOpen={ menuOpen } onClick={ this.handleMenuClick } />
        <MenuOpen onClick={ this.handleMenuClick } menuIsOpen={ menuOpen } />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/skills" component={ Skills } />
        </Switch>
      </div>
    )
  }
}

export default App;
