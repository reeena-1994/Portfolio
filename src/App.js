import React, { Component } from 'react';
import Home from './component/Home';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';
import { HashRouter, Route, Link, Button } from "react-router-dom";
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
                        <Link to="/"><div className="icon-text"><i className="fas fa-home"></i>Home</div></Link>
                        <Link to="/About"><div className="icon-text"><i className="far fa-heart"></i>About</div></Link>
                        <Link to="/Work"><div className="icon-text"><i className="fas fa-desktop"></i>Work</div></Link>
                        <Link to="/Contact"><div className="icon-text"><i className="far fa-paper-plane"></i>Contact</div></Link>
                        </Navigation>
                        <Button class="mdl-layout__drawer-button" ></Button>
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