 import { useEffect, useState } from "react";
 import { Link } from "react-router-dom";

import "../asset/css/navbar.css";


//import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faHouse, faBaseball , faPhone , faList, faBaseballBatBall } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [Opennav, setOpennav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 700;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false);
  }, [isMobile, ]);

  return (
    <div>
      <nav className={'nav '}>
        <div className={`${isMobile ? "sub_nav_mb " : "sub_nav "}` + `${Opennav ? "opennav" : ""}`}>
        <div className={`${isMobile ? "n_lg_mb" : "n_lg"}`}>
          <div className="logo">
            <h4>The Game 11</h4>
          </div>

          <div className={`${isMobile ? "n_ham_mb" : "n_ham"}`} onClick={()=>{Opennav ? setOpennav(!true) : setOpennav(!false)}}>
            <FontAwesomeIcon icon={Opennav ? faXmark : faBars}  />
          </div>
        </div>

        <div className={`${isMobile ? "n_list_mb" : "n_list "}`}>
        {/* Navlist component hai jo props ke sath pass kiye hai aur wo niche defined hai */}
          <Navlist text="Home" to="/" icon={faHouse} />
          <Navlist text="Live Matches" to='live-matches' icon={faBaseballBatBall}/>
          <Navlist text="Result" to={"/joincontest/:id"} icon={faList} />
          <Navlist text="Contact us" to='contactus' icon={faPhone} />
        </div>
        </div>
      </nav>
    </div>
  );
}

const Navlist = (props) => {
  return (
    <div className="navlist">
      <FontAwesomeIcon icon={props.icon} className="navicon" /> 
      <Link to={props.to}> {props.text} </Link>
      {/* <a href={props.to}> {props.text} </a> */}
    </div>
  );
};
