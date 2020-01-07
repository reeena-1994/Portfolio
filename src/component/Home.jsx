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
        <div className="home__main">
            <ul className="My-portfolio">
                <img src={img} className="Home-img" alt="logo" />
                <Link style={style.linkLine} to="/About">
                  <li className="About-border">
                    <div className="About">
                      <div className="About-text">About</div>
                    </div>
                  </li>
                </Link>
                <Link style={style.linkLine} to="/Work">
                  <li className="Work-border">
                    <div className="Work">
                      <div className="Work-text">Work</div>
                    </div>
                  </li>
                </Link>
                <Link style={style.linkLine} to="/Contact">
                  <li className="Contact-border">
                    <div className="Contact">
                      <div className="Contact-text">Contact</div>
                    </div>
                  </li>
                </Link>
            </ul>
        </div>
    )
  }
}
export default Home;
