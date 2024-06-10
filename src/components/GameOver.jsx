export default function({winner, onRematch}){
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{winner} is the Winner</p>
            <p>
                <button onClick={onRematch}>Rematch</button>
            </p>
        </div>
    )
}