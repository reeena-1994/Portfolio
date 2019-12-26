import React, { Component } from 'react';
import Home from './component/Home';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';
import { HashRouter, Route, Link } from "react-router-dom";
import { Layout, Navigation, Drawer, } from 'react-mdl';

class App extends Component {
  render() {
    return (
        <div className="content">
            <HashRouter basename = '/'>
                <Layout>
                    <div className="header">
                        <Navigation>
                        </Navigation>
                    </div>
                    <Drawer>
                        <Navigation>
                        <Link to="/"><i className="fas fa-home">Home</i></Link>
                        <Link to="/About"><i className="fas fa-icons">About</i></Link>
                        <Link to="/Work"><i className="fas fa-desktop">Work</i></Link>
                        <Link to="/Contact"><i className="far fa-paper-plane">Contact</i></Link>
                        </Navigation>
                    </Drawer>
                </Layout>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/about'}  component={About}/>
                <Route exact path={'/work'} component={Work}/>
                <Route exact path={'/contact'} component={Contact}/>
            </ HashRouter >
        </div>
     );
  }
}

export default App;