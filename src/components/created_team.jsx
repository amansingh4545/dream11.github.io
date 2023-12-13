import {Link } from 'react-router-dom'
import '../asset/css/created_team.css'
//path join k liye
import { resolvePath } from 'react-router-dom'

import React , {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
//usestate and useeffect are hooks while useselector is redux

export default function Created_team_compo(props) {
    const id=props.tid;
    //yani mai ise id k hisab se us page pe pahuchaunga
    const staticPath= resolvePath(/joincontest/ + id);

    //niche se return tak doubt++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    // This line uses the useState hook to initialize a state variable named players along with its
    // corresponding setter function setPlayers. The initial value of players is undefined.
    const [players, setplayers] = useState()

    // This line uses the useSelector hook from the React-Redux library to extract the players property 
    // from the Redux state. It assumes that there is a Redux slice named myteam and within that slice, 
    // there is a property called players.
    const playersl = useSelector((state)=> state.myteam.players)

    // This useEffect hook is used to update the local players state variable whenever the playersList value 
    // changes. It runs the setPlayers(playersList) statement when the dependency array [playersList] changes. 
    // This ensures that the local state stays in sync with the Redux state.

    //useeffect tabhi use kiya jata hai jab page refresh ho yad hai na....
    useEffect(() => {
        setplayers(playersl)
    }, [playersl]/*ye dependency array hai*/)
    // The dependency array [playersl] specifies that the effect should run whenever the value of playersl changes.
    
  return (
    <div className="created_team">
        <div className="ct-head">
            <button>
                {/* wahi niche wala */}
                {/* yaha 1 dale ho mtlb wo hamesha join with team karne par upar ind vs aus hi dikhayega */}
                {/* <Link to={"/joincontest/1"}>Play match with your team</Link> */}
                
                {/* solution */}
                <Link to={staticPath}>Play match with your team</Link>
            </button>
        </div>
        

        {/* plus click karne ke bad niche yahi dikha rha *************************************** */}
        <div className="our-team-players">
        {/* upar wala class use flex karke line me lane ke liye kiya gya hai nhi to lauda wo upar
         se niche aane lagta hai */}
        {
           //agar players hai to dikhao warna empty dikhao
           players?  players.map((player)=>{
                return(
                <div className="otp-compo">
                    {/* waise hame sirf ye 3 data milta par use style karne ke liye is class ka use */}
                    <img src={player[2]} alt="" />
                    <h4>{player[1]}</h4>
                    <p>{player[0]}</p>
                </div>
                )
            }): ""
        }
        </div>
    </div>
  )
}
