import Players from "./Players"
import GameBoard from "./GameBoard"
import { useState } from "react";
import Logs from "./Logs";
import GameOver from "./GameOver";
import {WINNING_COMBINATIONS} from '../assets/WINNING_COMBINATIONS'

function derivedActivePlayer(gameTurns){
    return (gameTurns.length>0&&gameTurns[0].player === 'X')?'O':'X'
}

const initalGameBoard = [[null,null,null], [null,null,null], [null,null,null]];

export default function(){
    const [gameTurns, setGameTurns] = useState([]);
    const [playerNames, setPlayerNames] = useState({
        X: 'Player 1',
        O: 'Player 2'
    });

    let activePlayer=derivedActivePlayer(gameTurns);
    let gameBoard = [...initalGameBoard.map(row=>[...row])];
    let winner;

    if(gameTurns.length>0){
        for(const turn of gameTurns){
            const {square, player} = turn;
            const {row, col} = square;
            gameBoard[row][col] = player;
        }
    }

    for(const combo of WINNING_COMBINATIONS){
        const firstSymbol = gameBoard[combo[0].row][combo[0].column];
        const secondSymbol = gameBoard[combo[1].row][combo[1].column];
        const thirdSymbol = gameBoard[combo[2].row][combo[2].column];

        if(firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol){
            winner = playerNames[firstSymbol];
        }
    }

    const isDraw = gameTurns.length === 9 && !winner;

    const addGameTurn = (rowIndex, colIndex) => {
        
        setGameTurns((prevGameTurns)=>{
            let currentPlayer = derivedActivePlayer(prevGameTurns);

            if(prevGameTurns.length>0&&prevGameTurns[0].player==='X'){
                currentPlayer = 'O';
            }

            const updatedGameTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevGameTurns];

            return updatedGameTurns;
        });
    }

    const handleSquareClick = (row, col) => {
        addGameTurn(row, col);
    }

    function handleRematch(){
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, playerName){
        setPlayerNames(prevPlayerNames=>{
            return{
                ...prevPlayerNames,
                [symbol]: playerName
            }
        })
    }

    return(
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    {(winner||isDraw)&&<GameOver winner={winner} onRematch={handleRematch}/>}
                    <Players activePlayer={activePlayer} handlePlayerNameChange={handlePlayerNameChange}/>
                </ol>
                <GameBoard handleSquareClick={handleSquareClick} gameBoard={gameBoard}/>
                <Logs gameTurns={gameTurns}/>
            </div>
        </main>
    )
}