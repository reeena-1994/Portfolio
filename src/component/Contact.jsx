import React from 'react'
import './Contact.css';

class Contact extends React.Component {
  render(){
    const style = {
      textPosition: {textAlign: 'right'}
    }
    return(
      <div  className="wrapper">
        <div className="contact-main">
          <div className="contact-container">
            <div className="fab"><i className="far fa-envelope" ></i></div>
            <div className="email-text">reina.kato@eras.jp</div>
          </div>
          <div className="contact-title-text" style={style.textPosition}>
              <div className="text-c">C</div>
              <div className="text-o">o</div>
              <div className="text-n">n</div>
              <div className="text-t">t</div>
              <div className="text-a">a</div>
              <div className="text-c">c</div>
              <div className="text-t">t</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;