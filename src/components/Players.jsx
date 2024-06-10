import Player from "./Player"

export default function({activePlayer, handlePlayerNameChange}){
    return(
        <>
            <Player initialName="Player 1" symbol="X" activePlayer={activePlayer==='X'} handlePlayerNameChange={handlePlayerNameChange}/>
            <Player initialName="Player 2" symbol="O" activePlayer={activePlayer==='O'}/>
        </>
    )
}