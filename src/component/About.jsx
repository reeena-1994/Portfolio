import React from 'react'
import './About.css';
import myselfimg from './myself.jpg';
import hobbyimg from './hobby.jpg';

class About extends React.Component {
  render(){
    const style = {
      imgSize: {width: '300px',height: '50px'},
      textPosition: {textAlign: 'right'}
    }
    return(
        <div className="about-main">
          <div className="introduction-container">
            <ul className="myself">
              <div className="myself-title">私について</div>
              <li className="myself-list">
                <div className="myself-list-text">
                  <img src={myselfimg} className="myself-background" alt="ピンクの花背景" style={style.imgSize}/>
                  <div className="myself-text">
                    <div className="introduction-myself-text">Reina Kato</div>
                  </div>
                </div>
              </li>
              <li className="myself-list">
                <div className="myself-list-text">
                  <img src={hobbyimg} className="hobby-background" alt="白の花背景" style={style.imgSize}/>
                  <div className="myself-text">
                    <div className="introduction-myself-text">Kanagawa</div>
                  </div>
                </div>
              </li>
              <li className="myself-list">
                <div className="myself-list-text">
                  <img src={myselfimg} className="myself-background" alt="ピンクの花背景" style={style.imgSize}/>
                  <div className="myself-text">
                    <div className="introduction-myself-text">1994.10</div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="hobby">
              <div className="hobby-title">好きなこと</div>
              <li className="hobby-list">
                <div className="hobby-list-text">
                  <img src={hobbyimg} className="hobby-background" alt="白の花背景" style={style.imgSize}/>
                  <div className="hobby-text">
                      <div className="introduction-hobby-text">料理</div>
                  </div>
                </div>
              </li>
              <li className="hobby-list">
                <div className="hobby-list-text">
                  <img src={myselfimg} className="myself-background" alt="ピンクの花背景" style={style.imgSize}/>
                  <div className="hobby-text">
                      <div className="introduction-hobby-text">アイドル鑑賞</div>
                  </div>
                </div>
              </li>
              <li className="hobby-list">
                <div className="hobby-list-text">
                  <img src={hobbyimg} className="hobby-background" alt="白の花背景" style={style.imgSize}/>
                  <div className="hobby-text">
                      <div className="introduction-hobby-text">散歩</div>
                  </div>
                </div>
              </li>
            </ul>
            </div>
            <div className="about-title-text" style={style.textPosition}>
                <div className="text-a">A</div>
                <div className="text-b">b</div>
                <div className="text-o">o</div>
                <div className="text-u">u</div>
                <div className="text-t">t</div>
            </div>
        </div>
    )
  }
}

export default About;