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
            <div className="My-portfolio">
                <img src={img} className="Home-img" alt="logo" />
                <Link style={style.linkLine} to="/About">
                  <div className="About">
                    <div className="About-text">About</div>
                  </div>
                </Link>

                <div className="Work">
                  <Link style={style.linkLine} to="/Work"><div className="Work-text">Work</div></Link>
                </div>
                <div className="Contact">
                  <Link style={style.linkLine} to="/Contact"><div className="Contact-text">Contact</div></Link>
                </div>
            </div>
        </div>
    )
  }
}
export default Home;
