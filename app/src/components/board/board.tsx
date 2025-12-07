import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { defaultBoard, type BoardType } from "../../types/board";
import "./board.scss";
import { Square } from "../square/square";

export const Board = forwardRef((props, ref) => {
  const [rows, setRows] = useState<string>("87654321");
  const [cols, setCols] = useState<string>("abcdefgh");

  const [boardState, setBoardState] = useState<BoardType>(defaultBoard);
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [currentTurn, setCurrentTurn] = useState<"w" | "b">("w");
  const [playerTurn, setPlayerTurn] = useState<"w" | "b">("w");

  useEffect(() => {
    setPlayerTurn(currentTurn === boardState.orientation ? currentTurn : (currentTurn === "w" ? "b" : "w"));
  }, [currentTurn, boardState.orientation]);

  useEffect(() => {
    if ((boardState.orientation === "b" && rows[0] !== "1") || (boardState.orientation === "w" && rows[0] !== "8")) {
      setRows(rows.split("").reverse().join(""));
      setCols(cols.split("").reverse().join(""));
    }
  }, [boardState.orientation]);

  useImperativeHandle(ref, () => ({
    switchOrientation: () => {
      setBoardState((prev) => ({
        ...prev,
        orientation: prev.orientation === "w" ? "b" : "w",
      }));
    },
  }));

  const onSquareClick = (square: string) => {
    console.log("Clicked square in Board:", square);
    if (!playerTurn) return;

    if (selectedSquare) {
      // Move piece logic here
      setSelectedSquare(null);
    } else {
      // Select piece logic here
      const piece = boardState.positions.find(
        (p) => p.square === square
      )?.piece;
      if (piece && piece.charAt(0) === currentTurn) {
        setSelectedSquare(square);
      }
    }
  };

  return (
    <div>
      {rows.split("").map((row, i) => (
        <div key={row} className="board-row flex">
          <div className="board-row-label flex center">{row}</div>
          {cols.split("").map((col) => {
            const square = `${col}${row}`;
            const piece = boardState.positions.find(
              (p) => p.square === square
            )!.piece;
            return (
              <div
                key={square}
                className={
                  "board-square" +
                  ((i + cols.indexOf(col)) % 2 === 0 ? " white" : " black")
                }
              >
                <Square
                  square={square}
                  piece={piece}
                  gameType="sandbox"
                  playerTurn={currentTurn === boardState.orientation}
                  playerColor={boardState.orientation}
                  clickSquare={onSquareClick}
                />
              </div>
            );
          })}
        </div>
      ))}
      <div className="flex board-col-label">
        {cols.split("").map((col) => (
          <div key={col}>{col}</div>
        ))}
      </div>
    </div>
  );
});
