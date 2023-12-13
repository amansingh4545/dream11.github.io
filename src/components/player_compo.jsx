import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faMinus } from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import "../asset/css/playerlist.css";
import playersinfo from '../asset/data/playerinfo.json'
import { useSelector, useDispatch } from 'react-redux'
import {addplayer , removeplayer} from '../store/slice'

export default function PlayerList(props) {
  //props-team1 or team2 yani india or australia
  
  //ye for loop k liye tha isliye iska bhi koi kam nhi............
  // const [rmindex, setrmindex] = useState()

  //jo bhi props bheja gya hai bas us team k info nikala gya hai

  //playerinfo me ab sare player line se aa gye hai
  const playerinfo = playersinfo[props.team]['players']
  //redux ka dispatch hai jo ki reducers me used function ko call karne k kam me aata hai
  const dispatch = useDispatch()


  //iska bhi koi kam nhi hai..........
  // const players = useSelector((state)=> state.myteam.players)

  //is function ka kch kam hi nhi aaya bc............
  // const checkonteam = (pname)=>{
  //   let i = 0
  //   for(const p of players){
  //     i = i+1
  //     if(p[0] == pname){
  //       console.log(p[0])
  //       setrmindex(i)
  //       return true
  //       break
  //     }
  //   }
  // }
  // checkonteam()

  return (
    <div>
      <div className="player-list">
      
        {/* ye map wale me jo player hai use as e mano...usme playerinfo ke sare data hai... */}
        {playerinfo.map( (player)=>{
          //har data ke liye ye sab chalega
          return(
          <div className="player-compo" key={player['name']}>
            <div className="pc-left">
              <div className="player-img">
                {/* map kiye hai to ek ek bar sare players k image aajayenge */}
                <img src={player['img']} alt="" />
              </div>
              <div className="player-detail">
                <h4>{player['name']}</h4>
                <p>{player['role']}</p>
              </div>
            </div>
            
            <div className="pc-right">
              <div className="add-player">

                <button onClick={()=>{
                  const data = [player['name'], player['role'], player['img']]
                  //yani click karne par ise waha dikhana hai
                  //yahi data action k payload me ajyega
                  dispatch(addplayer(data))

                }}> <FontAwesomeIcon icon={faPlus}/> </button>
                
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
}

