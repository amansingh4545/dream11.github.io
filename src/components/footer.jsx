import React  from 'react'
import { Link } from "react-router-dom";
import '../asset/css/footer.css'
// import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF ,faInstagram , faLinkedinIn , faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className='foot'>
        <footer className="footer-distributed">
            <div className="footer-left">   
                <h3>The Game 11</h3>
                <span className="footer-links">
                    <Link to="" className="link-1">Home</Link>
                    <a href=""></a>
                    <Link to="services" className="link-1">Services</Link>
                    <a href=""></a>
                    <Link to="faq" className="link-1">Faq</Link>
                    <a href=""></a>
                    <Link to="contactus" className="link-1">Contact us</Link>
                    <a href=""></a>
                    <Link to="pricing" className="link-1">Pricing</Link>
                </span>
                {/* <p className="footer-company-name">The Game 11 © 2023</p> */}
            </div>

            {/* <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p>NIT RAIPUR CHHATTISHGARH</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+91 9165130008</p>
                    <p></p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="globaltechnology.org.in@gmail.com">thegame11@email.com</a></p>
                </div>
            </div> */}

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    The Game 11 provides a fantasy gaming platform for cricket. It is an online game where users create a virtual team of real-life players and earn points based on the performances of these players in real matches.
                </p>
            </div>
            <div className="footer-icons">
                <a href="#"><FontAwesomeIcon className="aman" icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon className="aman" icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon className="aman" icon={faLinkedinIn} /></a>
                <a href="#"><FontAwesomeIcon className="aman" icon={faGithub} /></a>
            </div>
        </footer>
    </div>
  )
}
