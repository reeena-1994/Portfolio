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
        <div className="demo-big-content">
            <Layout>
                <div className="header">
                    <Navigation>
                    </Navigation>
                </div>
                <Drawer>
                    <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Work">Work</Link>
                    <Link to="/Contact">Contact</Link>
                    </Navigation>
                </Drawer>
            </Layout>
            <HashRouter basename = '/'>
                <Route exact path={'/'} component={Home}/>
                    <Route path={'/about'}  component={About}/>
                    <Route path={'/work'} component={Work}/>
                    <Route path={'/contact'} component={Contact}/>
            </ HashRouter >
        </div>
  );
}
}

export default App;