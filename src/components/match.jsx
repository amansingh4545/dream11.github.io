import React, { useState } from "react";
import { Link } from "react-router-dom";

// import css file
import "../asset/css/match.css";

// import images
import matchdetail from '../asset/data/matchlist.json'
import Match_detail_compo from "./match_detail_compo";

export default function Match(props) {
//props me matchid bhej rhe

//matchdetail ke andar matches hai uske andar ye...
  const match = matchdetail['matches'][props.matchid-1];
  
  return (
    <div>
      <div className="match-card">
        <div className="team team-left">
          <img
            src={match["flag1"]}
            alt="India Flag"
            className="flag"
          />
          <h2>{match['team1']}</h2>
        </div>
        <div className="match-center">
          <div className="vs">VS</div>
          <div className="details">
            <p>Date: {match['date']}</p>
            <p>Venue: {match['venue']}</p>
            <p>Time: 7:00 PM</p>
          </div>
        </div>
        <div className="team team-right">
          <img
            src={match["flag2"]}
            alt="England Flag"
            className="flag"
          />
          <h2>{match['team2']}</h2>
        </div>
        {props.join? <div className="details">
          <button >

            {/* waise iska matlb ham match1 ya match1 ya match2 aise hi kisi me ja rhe hai
            par ye match1 match2 kaha le jayega...asal me ye link hi hai jise ham define kiye hai 
            app.js me jo ki route k andar hai ab iske bad wo tumhe le jayega jaha le jana hoga */}

            {/* isko itna bkcd se pass karne se accha sidha wo comp hi pass karo na bhai props 
            par dikkat hai button ke link me component with props nhi dal sakte*/}
            {/* <Link to={"Match_detail_compo"} >Join Contest</Link>  aise pass kar sakte comp par props nhi bhej sake*/}
            {/* ab samajh aaya redux/contextapi aur import export me diffrence...bc tenzin */}
            <Link to={"match/"+props.matchid} >Join Contest</Link>
            {/* "match/"+props.matchid matlab localhost:3000 k bad ham /match/1 jod ke redirect kar rhe */}
          </button>
        </div> : ""}
      </div>
    </div>
  );
}
