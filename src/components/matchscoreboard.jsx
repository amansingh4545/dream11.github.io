import React from 'react'

export default function Matchscoreboard(props) {
    const match = props.match

  return (
    <div className="match-score-bord">
        
        <div className="match-card">
          <div className="team team-left">
            <img src={match["flag1"]} alt="Flag" className="flag" />
            <h2>{match["team1"]}</h2>
          </div>
          <div className="match-center">
            <div className="vs">VS</div>
            <div className="details">
              <p>Date: {match["date"]}</p>
              <p>Venue: {match["venue"]}</p>
              <p>Time: 7:00 PM</p>
            </div>
          </div>
          <div className="team team-right">
            <img src={match["flag2"]} alt="Flag" className="flag" />
            <h2>{match["team2"]}</h2>
          </div>
        </div>
        <div className="match-score-detail">
          <div className="details">
            <p>Total score: 150</p>
            <p>Total balls: 120</p>
            <p>Total over : 20</p>
            <p>Target score: 151</p>
            <p>Left balls: 0 balls</p>
            <p>Left over: 0 ovr</p>
          </div>
          <div className="details">
            <p>Current score: 98</p>
            <p>Total balls: 120</p>
            <p>Total over : 20</p>
            <p>Target score: 151</p>
            <p>Left balls: 26 balls</p>
            <p>Left over: 6.2 ovr</p>
          </div>
        </div>
      </div>
  )
}
