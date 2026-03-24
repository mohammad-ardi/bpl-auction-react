import SelectedCard from "../../../ui/SelectedCard";

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
    const handleDeleteSelectedPlayer=(player)=>{
        const filteredPlayers = selectedPlayers.filter(selectedPlayer=> selectedPlayer.playerName !== player.playerName)

        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }
    return ( 
        // <div>Seletced Players is gonna show up here</div>
        // console.log(selectedPlayers, 'selected players')
        <div>
            <div>
                <div className="space-y-5">
                    {
                        selectedPlayers.map(player=>{
                            return <SelectedCard
                            key={player.playerNo}
                            player={player}
                            handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
                            ></SelectedCard>
                        })
                    }
                </div>
            </div>
        </div>
     );
}
 
export default SelectedPlayers;