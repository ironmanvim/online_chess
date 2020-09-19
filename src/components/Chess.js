import React, { useEffect, useState } from "react";
import '../Assets/css/chess.css';
import ChessBoard from "./ChessBoard";
// import defaultChessBoard from "../js/chessBoard";

export default function Chess({ gameID, defaultChessBoard, defaultTurn, team, gameOver, setGameOver, setWinner }) {
    const [chessBoard, setChessBoard] = useState(defaultChessBoard);
    const [turn, setTurn] = useState(defaultTurn);

    console.log(chessBoard);
    useEffect(() => {
        let whiteFound = false;
        let blackFound = false;
        chessBoard.forEach(chessRow => {
            chessRow.forEach(chessCell => {
                if (chessCell[0] === "b-king") {
                    blackFound = true;
                }
                else if (chessCell[0] === "w-king") {
                    whiteFound = true;
                }
            })
        })
        if (whiteFound && blackFound) {

        } else if (whiteFound) {
            setGameOver(true);
            setWinner("w");
        } else if (blackFound) {
            setGameOver(true);
            setWinner("b");
        }
    }, [chessBoard]);

    const resetChessBoard = () => {
        setChessBoard(defaultChessBoard);
        setTurn("w");
    };

    return (
        <div className="chess">
            <ChessBoard
                turn={turn}
                setTurn={setTurn}
                chessBoard={chessBoard}
                setChessBoard={setChessBoard}
                gameID={gameID}
                team={team}
                gameOver={gameOver}
            />
            <div className="dead-pieces">

            </div>
            <div className="chess-turn">
                {turn === "w" ? "white " : "black "}
                {turn === team && "Your Turn"}
                {gameOver && "Game Over"}
            </div>
            <div className="reset-chess">
                {/* <button onClick={() => resetChessBoard()}>
                    Reset
                </button> */}
            </div>
        </div>
    );
}