import React, {useEffect} from "react";
import ChessRow from "./ChessRow";
import chessRules from "../js/chessRules";
import websocket from "../js/websocket";

const data = {
    from: null,
    to: null,
};

function noVariable([a, b], [x, y]) {
    const [directionX, distanceX] = x.split("");
    const [directionY, distanceY] = y.split("");
    let [resultX, resultY] = [a, b];

    if (directionX === "+") {
        resultX = a + parseInt(distanceX);
    } else {
        resultX = a - parseInt(distanceX);
    }
    if (directionY === "+") {
        resultY = b + parseInt(distanceY);
    } else {
        resultY = b - parseInt(distanceY);
    }

    if ((resultX > 7 || resultY > 7) || (resultX < 0 || resultY < 0)) {
        return null;
    }
    return [resultX, resultY];
}

function singleVariable([a, b], [x, y]) {
    let [tempX, tempY] = [x, y];

    let result = [];
    for (let i = 0; i < 8; i++) {
        tempX = tempX.replace("x", i.toString());
        tempY = tempY.replace("x", i.toString());
        let tempResult = noVariable([a, b], [tempX, tempY]);
        if (tempResult === null) {
            break;
        }
        result = result.filter(aResult =>
            !(aResult[0] === tempResult[0] && aResult[1] === tempResult[1])
        );
        result.push(tempResult);
        [tempX, tempY] = [x, y];
    }
    return result;
}

const cleanSelectedChessBoard = (chessBoard) => chessBoard.map(chessRow => {
    return chessRow.map(chessCell => {
        return [chessCell[0], "", chessCell[2]];
    });
});

const getSelectedChessPiecePosition = (chessBoard) => {
    const returnValue = [-1, -1];
    returnValue[0] = chessBoard.findIndex((chessRow) => {
        const selectedIndex = chessRow.findIndex(chessCell => chessCell[1] === "s");

        if (selectedIndex !== -1) {
            returnValue[1] = selectedIndex;
            return true;
        }
        return false;
    });
    return returnValue;
};

const selectAndMove = (row, column, chessBoard, setChessBoard, turn, setTurn, gameID, type = null) => {
    const newChessBoard = cleanSelectedChessBoard(chessBoard);
    const [selectedRow, selectedColumn] = getSelectedChessPiecePosition(chessBoard);


    const isAlreadySelectedCell = (row === selectedRow && column === selectedColumn);
    const hasSelectedCell = (selectedColumn !== -1 && selectedRow !== -1);
    const isEmptyChessCell = newChessBoard[row][column][0].match(/^\s*$/);


    if (isAlreadySelectedCell) {
        console.log("chess cell deselected");
    } else if (hasSelectedCell) {
        if (chessBoard[row][column][1] === "h" || chessBoard[row][column][1] === "m") {
            console.log("move the selected chess piece if it can");

            data.to = {
                row,
                column,
            };
            if (type === null) {
                console.log("Happened");
                websocket.sendObject({
                    type: "chess_move",
                    move: data,
                    game: gameID,
                });
            }
            newChessBoard[row][column][0] = newChessBoard[selectedRow][selectedColumn][0];
            newChessBoard[selectedRow][selectedColumn][0] = "";

            if (chessBoard[selectedRow][selectedColumn][2] === true) {
                newChessBoard[selectedRow][selectedColumn][2] = false;
            }

            if (turn === "w") {
                setTurn("b");
            } else {
                setTurn("w");
            }
        }

    } else if (isEmptyChessCell) {
        console.log("empty chess cell non selectable");
    } else {
        console.log("non empty chess cell selected");
        if (turn === newChessBoard[row][column][0].split("-")[0]) {
            newChessBoard[row][column][1] = "s";

            data.from = {
                row,
                column,
            };

            let {movement, firstMovement, killMovement} = chessRules[newChessBoard[row][column][0]];
            console.log(row, column);
            let currentMovements = [...movement];
            if (newChessBoard[row][column][2]) {
                currentMovements.push(...firstMovement);
            }

            currentMovements.forEach(aMovement => {
                const availableMatchers = singleVariable([row, column], aMovement);

                let canHit = false;
                availableMatchers.forEach(([x, y]) => {
                    if (newChessBoard[x][y][1] === "s") return;
                    if (newChessBoard[x][y][0] !== "" && !canHit) {
                        if (newChessBoard[x][y][0].split("-")[0] !== newChessBoard[row][column][0].split("-")[0]) {
                            if (killMovement === "same")
                                newChessBoard[x][y][1] = "h";
                        }
                        canHit = true;
                        return;
                    }
                    if (!canHit) {
                        newChessBoard[x][y][1] = "m";
                    }
                });
            });

            if (killMovement !== "same") {
                killMovement.forEach(aKillRule => {
                    const availableKillMatchers = singleVariable([row, column], aKillRule);

                    let canHit = false;
                    availableKillMatchers.forEach(([x, y]) => {
                        if (newChessBoard[x][y][1] === "s") return;
                        if (newChessBoard[x][y][0] !== "" && !canHit) {
                            if (newChessBoard[x][y][0].split("-")[0] !== newChessBoard[row][column][0].split("-")[0]) {
                                newChessBoard[x][y][1] = "h";
                            }
                            canHit = true;
                        }
                    });
                })
            }
        }
    }
    setChessBoard(newChessBoard);
};
const movementArray = [];
export default function ChessBoard({chessBoard, setChessBoard, turn, setTurn, gameID, team}) {

    const selectAndMoveChessCell = (row, column, type = null) => {
        if (type !== null) {
            selectAndMove(row, column, chessBoard, setChessBoard, turn, setTurn, gameID, type);
        } else if (team === turn) {
            selectAndMove(row, column, chessBoard, setChessBoard, turn, setTurn, gameID, type);
        }
    };

    useEffect(() => {
        function moveChessCell(event) {
            let {data} = event;
            data = JSON.parse(data);
            console.log(data);
            if (data.type === "chess_move") {
                const {move} = data;
                selectAndMoveChessCell(move.from.row, move.from.column, "from_server");
                movementArray.push([move.to.row, move.to.column]);
            }
        }

        websocket.addEventListener("message", moveChessCell);

        return () => {
            websocket.removeEventListener("message", moveChessCell);
        };
    });

    useEffect(() => {
        if (movementArray.length > 0) {
            const [row, column] = movementArray.shift();
            selectAndMoveChessCell(row, column, "from_server");
        }
    }, [chessBoard]);

    const renderChessRows = chessBoard.map((chessRow, index) =>
        <ChessRow key={index} chessRow={chessRow} rowIndex={index} selectAndMoveChessCell={selectAndMoveChessCell}/>
    );

    return (
        <div className="chess-board">
            {renderChessRows}
        </div>
    );
}