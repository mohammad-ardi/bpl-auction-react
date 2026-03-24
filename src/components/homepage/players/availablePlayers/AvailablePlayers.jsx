import Card from "../../../ui/Card";


const AvailablePlayers = ({players,coin, setCoin}) => {
    return ( 
        <div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    players.map(player=>{
                        return <Card
                        key={player.playerNo} 
                        player={player}
                        coin={coin}
                        setCoin={setCoin}
                        ></Card>
                    })
                }
            </div>
        </div>
     );
}
 
export default AvailablePlayers;