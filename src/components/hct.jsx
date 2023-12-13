import React from "react";

// import css file
import "../asset/css/hct.css";

// import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus, faHammer } from "@fortawesome/free-solid-svg-icons";

// import images for how to create team
import step1 from "../asset/images/step1.webp";
import step2 from "../asset/images/step2.webp";
import step3 from "../asset/images/step3.webp";

export default function Hct() {
  return (
    <div>
      <div className="hct">
        <div className="hct_title">
          <span>
            It is very easy to play <span className="red">on the game 11</span>
          </span>
        </div>
        <div className="hct-components">
          <div className="hct-component">
            <div className="hctc-text">
              <span>
                <FontAwesomeIcon icon={faList} />
              </span>
              <div className="hctc-textdiv">
                <h3>Choose match</h3>
                <img src={step1} alt="" />
              </div>
            </div>
            <div className="hct-info">
              Choose match from the current match going on
            </div>
          </div>
          <div className="hct-component">
            <div className="hctc-text">
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <div className="hctc-textdiv">
                <h3>Creat team</h3>
                <img src={step2} alt="" />
              </div>
            </div>
            <div className="hct-info">
              Choose match from the current match going on
            </div>
          </div>
          <div className="hct-component">
            <div className="hctc-text">
              <span>
                <FontAwesomeIcon icon={faHammer} />
              </span>
              <div className="hctc-textdiv">
                <h3>Bid on team</h3>
                <img src={step3} alt="" />
              </div>
            </div>
            <div className="hct-info">
              Choose match from the current match going on
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
