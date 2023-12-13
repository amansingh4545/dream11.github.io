import React from "react";
import { useParams } from "react-router";
import "../asset/css/joincontest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import matchdetail from "../asset/data/matchlist.json";
import Matchscoreboard from "../components/matchscoreboard";

import { useSelector } from "react-redux";

export default function Joincontest() {
  const id = useParams()["id"];
  const matchd = matchdetail["matches"][id - 1];

  //isme wahi sare player aa rhe hai jise hamne waha select kiya tha
  const playerinfo = useSelector((state) => state.myteam.players);
  // alert(playerinfo);

  return (
    <div className="joincontest">
      <div className="ct-head w100">
        <span>Your Contest Score Board</span>
      </div>
      
      {/* jhanda+toatl score wala wala */}
      <Matchscoreboard match={matchd} />

      <div className="players-score">
        <div className="player-list">
          {/* ab sare player mil gye hai mapping karke line se unko samne dikhana hai score ke sath */}
          {playerinfo.map((player) => {
            return (
              <div className="player-compo" key={player[0]}>
                <div className="pc-left">
                  <div className="player-img">
                    <img src={player[2]} alt="" />
                  </div>
                  <div className="player-detail">
                    <h4>{player[0]}</h4>
                    <p>{player[1]}</p>
                  </div>
                </div>
                <div className="pc-right">
                  <div className=" pd-center player-detail">
                    <h4>Run</h4>
                    <p>40</p>
                  </div>
                  <div className="player-detail pd-center">
                    <h4>Ball</h4>
                    <p>38</p>
                  </div>
                  <div className="player-detail pd-center">
                    <h4>Over</h4>
                    <p>6.2</p>
                  </div>
                  <div className="player-detail pd-center">
                    <h4>Run Rate</h4>
                    <p>1.05</p>
                  </div>
                  <div className="player-detail pd-center ">
                    <h4>G11 Point</h4>
                    <p>{" "} <FontAwesomeIcon icon={faCoins} className="golden" swapOpacity /> {" "}150 </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="total-score"></div>
    </div>
  );
}
