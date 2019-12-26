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
                        <Link to="/">Home</Link>
                        <Link to="/About"><div className="icon-text"><i class="far fa-heart"></i>About</div></Link>
                        <Link to="/Work">Work</Link>
                        <Link to="/Contact">Contact</Link>
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