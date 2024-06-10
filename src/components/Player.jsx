import { useState } from "react"

export default function({initialName, symbol, activePlayer, handlePlayerNameChange}){

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
        if(isEditing)
            handlePlayerNameChange(symbol, playerName);
    }

    const handleNameTagChange = (e) => {
        setPlayerName(e.target.value);
    }

    let nameTag = isEditing?
                    <input className="playerNameInput" type="text" name="playerName" id="playerName" value={playerName} onChange={handleNameTagChange}/>
                    :<span className="player-name">{playerName}</span>


    return(
        <li className={activePlayer?'active':undefined}>
            <span className="player">
                {nameTag}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button id="btn-temp" onClick={handleEditClick}>{isEditing? "Save": "Edit"}</button>
        </li>
    )
}