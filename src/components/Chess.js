import React, {useState} from "react";
import '../Assets/css/chess.css';
import ChessBoard from "./ChessBoard";
// import defaultChessBoard from "../js/chessBoard";

export default function Chess({gameID, defaultChessBoard, defaultTurn, team}) {
    const [chessBoard, setChessBoard] = useState(defaultChessBoard);
    const [turn, setTurn] = useState(defaultTurn);

    console.log(chessBoard);

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
            />
            <div className="dead-pieces">

            </div>
            <div className="chess-turn">
                {turn === "w" ? "white" : "black"}
                {turn === team && "Your Turn"}
            </div>
            <div className="reset-chess">
                <button onClick={() => resetChessBoard()}>
                    Reset
                </button>
            </div>
        </div>
    );
}