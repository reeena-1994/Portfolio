import React from 'react'
import './Home.css';
import img from './background.jpeg';
import { Link, } from 'react-router-dom'

class Home extends React.Component {

  render(){
    const style = {
      linkLine: {textDecoration: 'none'},
    }
    return(
        <div className="container">
            <div className="My-portfolio">
                <img src={img} className="Home-img" alt="logo" />
                <ul className="portfolio-list">
                  <li className="About-border">
                    <Link style={style.linkLine} to="/About">
                        <div className="About">
                          <div className="About-text">About</div>
                          <span class="fa-stack fa-lg">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="About-icon far fa-heart fa-stack-1x fa-inverse"></i>
                          </span>
                        </div>
                    </Link>
                  </li>
                  <li className="Work-border">
                    <Link style={style.linkLine} to="/Work">
                        <div className="Work">
                          <div className="Work-text">Work</div>
                            <span class="fa-stack fa-lg">
                              <i class="fa fa-square fa-stack-2x"></i>
                              <i class="Work-icon fas fa-desktopt fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                    </Link>
                  </li>
                  <li className="Contact-border">
                    <Link style={style.linkLine} to="/Contact">
                        <div className="Contact">
                          <div className="Contact-text">Contact</div>
                            <span class="fa-stack fa-lg">
                              <i class="fa fa-square fa-stack-2x"></i>
                              <i class="Contact-icon far fa-paper-plane fa-stack-1x fa-inverse"></i>
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
