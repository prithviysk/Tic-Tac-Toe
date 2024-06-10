
export default function({handleSquareClick, gameBoard}){
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex)=>(
                            <li key={colIndex}>
                                <button disabled={col!==null} onClick={()=>handleSquareClick(rowIndex, colIndex)}>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}