import React from 'react'
import { useState } from 'react'

// import images
import img_virat from '../asset/images/virat.png'

// import css
import '../asset/css/home_intro.css'
import SignupLoginModal from './signuploginmodal'


// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Home_intro() {
    const [Loginbtn, setLoginbtn] = useState(false);
  return (
    <div className="home_intro">
        <div className="home_intro-left">
            <div className="title">
                <h1>The Game 11</h1>
            </div>
            <div className="title_para">
                <p>Don't just watch match play the match <br /> <span>"The Game 11"</span>
                create your your own team and win amazing rewards</p>
            </div>
            <div className="logsignup">
                <button className="signup">
                   Start Winning <span>  <FontAwesomeIcon icon={faArrowRight} /></span>
                </button>
            </div>
        </div>
        <div className="home_intro-right">
            <div className="img">
                <img src={img_virat} alt="the game 11| image of virat kohli" />
            </div>
        </div>

        {
            Loginbtn ? <SignupLoginModal loginstate={Loginbtn} /> : ""
        }
    </div>
  )
}
