import { FaUserAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({player, handleDeleteSelectedPlayer}) => {
    return ( 
        <div className="container mx-auto flex justify-between items-center border p-5 rounded-2xl">
            <div className="flex items-center gap-5">
                <img className="h-25 w-auto rounded-md" src={player.playerImg} alt={player.playerName} />
                <div>
                    <h2 className="font-semibold text-[20px] flex items-center gap-2"><FaUserAlt></FaUserAlt> {player.playerName}</h2>
                    <h2 className="text-[16px]">{player.playerType}</h2>
                </div>
            </div>
            <button onClick={()=>handleDeleteSelectedPlayer(player)} className="btn btn-secondary bg-red-500">
                <MdDelete></MdDelete>
            </button>
        </div>
     );
}
 
export default SelectedCard;