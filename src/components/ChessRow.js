import React from "react";
import ChessCell from "./ChessCell";

export default function ChessRow({chessRow, rowIndex, selectAndMoveChessCell}) {
    const renderChessRow = chessRow.map((chessCell, columnIndex) =>
        <ChessCell
            key={columnIndex}
            chessCell={chessCell}
            rowIndex={rowIndex}
            columnIndex={columnIndex}
            selectAndMoveChessCell={selectAndMoveChessCell}
        />
    );

    return (
        <div className="chess-row">
            {renderChessRow}
        </div>
    )
}