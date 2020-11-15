import React ,{ Component } from 'react';
import { Route } from 'react-router-dom';
import { Home } from './home';
import { Sponsor } from './sponsor';
import { Teacher } from './teacher';
import { Work } from './work/work';
import { Store } from './store';
import { Nav } from './nav';
import { About } from './about/about';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <Nav />
        <Route path="/about" component={ About } />
        <Route path="/sponsor" component={ Sponsor } />
        <Route path="/teacher" component={ Teacher } />
        <Route path="/work" component={ Work } />
        <Route path="/store" component={ Store } />
        <Route path="/" exact component={ Home } />
      </div>
    )
  }
}

export default App