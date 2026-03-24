import { use, useState } from "react";
import AvailablePlayers from "./availablePlayers/AvailablePlayers";
import SelectedPlayers from "./selectedPlayers/SelectedPlayers";

const Players = ({playersPromise, coin, setCoin}) => {
    const [btnState, setBtnState] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const players = use(playersPromise);
    // console.log(data);
    return ( 
        <div>
            <div className="container mx-auto my-8 flex justify-between items-center">

                {btnState === 'available' ? <p className="font-bold text-2xl">Available</p> : <p className="font-bold text-2xl">Selected Players ({selectedPlayers.length}/{players.length})</p>}

                <div>
                    <button
                    onClick={()=>{setBtnState("available")}}
                     className={`btn ${btnState === 'available' && 'bg-[#E7FE29]'} rounded-r-none rounded-l-xl`}>Available</button>
                    <button 
                    onClick={()=>{setBtnState("selected")}}
                    className={`btn ${btnState === 'selected' && 'bg-[#E7FE29]'} rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>

            {btnState === 'available' ? <AvailablePlayers 
            players={players} 
            coin={coin} 
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            ></AvailablePlayers> : 
            <SelectedPlayers 
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            coin={coin}
            setCoin={setCoin}
            ></SelectedPlayers>}
        </div>
     );
}
 
export default Players;