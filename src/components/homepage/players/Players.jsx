import { use } from "react";
import Card from "../../ui/card/Card";

const Players = ({playersPromise}) => {
    const players = use(playersPromise)
    // console.log(data);
    return ( 
        <div>
            <div className="container mx-auto mt-5 grid grid-cols-3 gap-4">
                {
                    players.map(player=>{
                        return <Card player={player}></Card>
                    })
                }
            </div>
        </div>
     );
}
 
export default Players;