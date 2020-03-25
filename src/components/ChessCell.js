import React from "react";
import chessPiecesIcons from "../js/chessPiecesIcons";
import isMobile from "../js/utils/isMobile";

console.log("isMobile: ", isMobile.any());

export default function ChessCell({chessCell, rowIndex, columnIndex, selectAndMoveChessCell}) {
    const backgroundClassName = (rowIndex + columnIndex) % 2 ? "chess-cell-light_background" : "chess-cell-dark_background";
    const [chessPiece, selected] = chessCell;
    let selectedClassName = selected === "s" ? "chess-cell-selected" : "";
    selectedClassName = selected === "m" ? "chess-cell-move-selected" : selectedClassName;
    selectedClassName = selected === "h" ? "chess-cell-hit-selected" : selectedClassName;
    const className = `chess-cell ${backgroundClassName} ${selectedClassName}`;

    return (
        <div
            className={className}
            onClick={(event) => {
                event.preventDefault();
                if (isMobile.any() === null) {
                    selectAndMoveChessCell(rowIndex, columnIndex);
                }
            }}
            onTouchStart={(event) => {
                event.preventDefault();
                if (isMobile.any()) {
                    selectAndMoveChessCell(rowIndex, columnIndex);
                }
            }}
        >
            {chessPiecesIcons[chessPiece]}
        </div>
    );
}