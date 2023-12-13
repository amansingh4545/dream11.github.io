import React from 'react'
import Matchscoreboard from '../components/matchscoreboard'

import matchdetial from '../asset/data/matchlist.json'

export default function Livematches() {
    const matches = matchdetial['matches']
    console.log(matches)
  return (
    <div>
        <div className="hct_title">
            <span>Live Matches Score Board</span>
        </div>
        <div>
        {matches.map((match)=>{
            return(
                <Matchscoreboard match={match} />
            )
        })}
        </div>
        
    </div>
  )
}
