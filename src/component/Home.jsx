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
                    <div className="About-border">

                      <div className="About-text">About</div>
                    </div>
                  </div>
                </Link>
                <Link style={style.linkLine} to="/Work">
                    <div className="Work">
                    <div className="Work-border">

                      <div className="Work-text">Work</div>
                    </div>
                  </div>
                </Link>
                <Link style={style.linkLine} to="/Contact">
                    <div className="Contact">
                    <div className="Contact-border">

                      <div className="Contact-text">Contact</div>
                    </div>
                  </div>
                </Link>
            </div>
        </div>
    )
  }
}
export default Home;
