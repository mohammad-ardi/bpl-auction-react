import { FaUserAlt, FaFlag } from "react-icons/fa";

const Card = ({player}) => {
    return ( 
        <div className="card bg-base-100 w-96 shadow-sm">
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
                    <p>{player.battingStyle}</p>
                    <p className="text-right">{player.bowlingStyle}</p>
                </div>
                <div className="card-actions justify-end">
                    <p className="font-bold text-[16px]">Price: ${player.price}</p>
                    <button className="btn">Chose Player</button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;