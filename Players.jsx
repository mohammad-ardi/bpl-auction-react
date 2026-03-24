import { use } from "react";

const Players = ({playersPromise}) => {
    const data = use(playersPromise)
    console.log(data);
    return ( 
        <div>
            <h1 className="font-bold text-2xl">Players: {data.length}</h1>
        </div>
     );
}
 
export default Players;