import { use } from "react";
import AvailablePlayers from "./availablePlayers/AvailablePlayers";

const Players = ({playersPromise}) => {
    const players = use(playersPromise)
    // console.log(data);
    return ( 
        <div>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
     );
}
 
export default Players;