import React from "react";
import { useParams } from "react-router";
import matchdetail from "../asset/data/matchlist.json";
import Match from "./match";
import PlayerList from "./player_compo";
import "../asset/css/player_compo.css";
import Created_team_compo from './created_team'


export default function Match_detail_compo() {
  // app.js me jo route me bheje the id usi ko yaha pakad rhe hai taki us hisab se jhande wande laga sake...ise ham props se bhi kar sakte the
  //par prop drilling ho jata
  const id = useParams()["id"];
  const match = matchdetail["matches"][id - 1];

  return (
    <>
      <div className="Join-match-page">
      <div className="hct_title">
        <span>
          Join the match between {match["team1"]} and {match["team2"]}
        </span>
      </div>
      
      {/* math detail kitne baje se hai kab se hai karke component */}
      <Match matchid={id} />
      {/* ye niche wala bas wo india aus flag wala img lane ke liye hai */}
      <div className="match-teams">
        <div className="players-acc-team">
          <div className="pct-head">
            <img src={match["flag1"]} alt="" />
            <span>Player's of team {match["team1"]}</span>
          </div>
          {/* ye player list k liye hai */}
          <PlayerList team={match["team1"]} />
          
        </div>

        
        <div className="players-acc-team">
          <div className="pct-head">
            <img src={match["flag2"]} alt="" />
            <span>Player's of team {match["team2"]}</span>
          </div>
          <PlayerList team={match["team2"]} />
        </div>
      </div>
      {/* ye niche wala add pe click karne par jo aata hai niche us page ke liye hai */}
      {/* jab jab + pe click karoge page refresh hoga aur useeffect pe call jayeag --------shayad*/}
      <Created_team_compo tid={id}/>
    </div>
    </>
  );
}
