import React from 'react'
import './Work.css';
import img from './plaid_img.jpeg';

class Work extends React.Component {
  render(){
    return(
      <div  className="wepper">
        <div className="work-main">
          <div className="work-title-text">
            <div className="text-w">W</div>
            <div className="text-o">o</div>
            <div className="text-r">r</div>
            <div className="text-k">k</div>
          </div>
          <div className="work1">
          <img src={img} className="App-logo" alt="作品1"/>
          </div>
          <div className="work2">
          <img src={img} className="App-logo" alt="作品2"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;