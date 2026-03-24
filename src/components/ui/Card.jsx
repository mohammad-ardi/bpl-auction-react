import { useState } from "react";
import { FaUserAlt, FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({player,coin, setCoin, selectedPlayers, setSelectedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false);
    // const handleChosePlayerBtn=()=>{
    //     let newCoin = coin - player.price
    //     if(newCoin >= 0){
    //         setCoin(newCoin);
    //     }else{
    //         alert('Not enough coin')
    //         return;
    //     }
    //     setIsSelected(true)
    //     alert(`${player.playerName} is selected`)
    // }
    // a slight simplified version of the above function:
    const handleChosePlayerBtn=()=>{
        const newCoin = coin - player.price
        if(newCoin < 0){
            // alert('Not enough coin')
            toast.warning('Not enough coin')
            return;
        }
        setCoin(newCoin);
        setIsSelected(true)
        // alert(`${player.playerName} is selected`)
        toast.success(`${player.playerName} is selected`)
        setSelectedPlayers([...selectedPlayers, player])
    }

    return ( 
        <div className="card bg-base-100 shadow-sm border">
            <figure>
                <img
                src={player.playerImg}
                alt={player.playerName}
                className="w-full h-48 object-contain" />
            </figure>
            <div className="card-body">
                <div className="flex items-center gap-2">
                    <FaUserAlt></FaUserAlt>
                    <h2 className="card-title font-semibold text-[20px]">{player.playerName}</h2>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <FaFlag />
                        <p className="text-[16px]">{player.playerCountry}</p>
                    </div>
                    <button className="btn">{player.playerType}</button>
                </div>

                {/* divider */}
                <div className="divider"></div>
                <p className="font-bold text-[16px]">Rating: </p>
                <div className="flex justify-between items-center">
                    <p className="font-semibold">{player.battingStyle}</p>
                    <p className="text-right font-semibold">{player.bowlingStyle}</p>
                </div>
                <div className="card-actions justify-end">
                    <p className="font-bold text-[16px]">Price: ${player.price}</p>
                    <button onClick={handleChosePlayerBtn} className="btn" disabled={isSelected}>{isSelected ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;