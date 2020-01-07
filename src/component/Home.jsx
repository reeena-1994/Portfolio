import React from 'react'
import './Home.css';
import HomeImg from './background.jpeg';
import { Link, } from 'react-router-dom'

class Home extends React.Component {

  render(){
    const style = {
      linkLine: {textDecoration: 'none'},
    }
    return(
        <div className="container">
            <div className="My-portfolio">
                <img src={HomeImg} className="Home-img" alt="logo" />
                <ul className="portfolio-list">
                  <li className="About-border">
                    <Link style={style.linkLine} to="/About">
                        <div className="About">
                          <div className="About-text">About</div>
                          <span className="About-icon fa-stack fa-lg">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="heart-icon far fa-heart fa-stack-1x fa-inverse"></i>
                          </span>
                        </div>
                    </Link>
                  </li>
                  <li className="Work-border">
                    <Link style={style.linkLine} to="/Work">
                        <div className="Work">
                          <div className="Work-text">Work</div>
                            <span className="Work-icon fa-stack fa-lg">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="pc-icon fas fa-desktop fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                    </Link>
                  </li>
                  <li className="Contact-border">
                    <Link style={style.linkLine} to="/Contact">
                        <div className="Contact">
                          <div className="Contact-text">Contact</div>
                            <span className="Contact-icon fa-stack fa-lg">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="paper-plane-icon far fa-paper-plane fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                    </Link>
                  </li>
                </ul>
            </div>
        </div>
    )
  }
}
export default Home;
