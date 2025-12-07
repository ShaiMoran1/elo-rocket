import { useState, useEffect } from "react";
import "./square.scss";
import classNames from "classnames";

interface SquareProps {
  square: string;
  piece: string | null;
  gameType: "game" | "freeplay" | "puzzle" | "sandbox";
  playerTurn?: boolean;
  squareToMove?: boolean;
  playerColor?: "w" | "b";
  clickSquare?: (square: string) => void;
}

export const Square = (props: SquareProps) => {
  const [svgUrl, setSvgUrl] = useState<string | null>(null);
  const [isActivePiece, setIsActivePiece] = useState(false);

  useEffect(() => {
    setIsActivePiece(
      !!props.piece &&
        (props.gameType === "sandbox" ||
          (props.gameType === "game" &&
            props.playerTurn &&
            props.playerColor === props.piece?.charAt(0)) ||
          (props.gameType === "freeplay" &&
            props.playerColor === props.piece?.charAt(0)))
    );
  }, [props.gameType, props.playerTurn, props.playerColor, props.piece]);

  const classes = classNames({
    pointer: isActivePiece || props.squareToMove,
    full: true,
  });

  useEffect(() => {
    if (props.piece) {
      import(`../../assets/pieces/${props.piece}.svg`)
        .then((module) => setSvgUrl(module.default))
        .catch((err) => console.error("Failed to load SVG:", err));
    }
  }, [props.piece]);

  const onSquareClick = () => {
    props.clickSquare?.(props.square);
  };

  return (
    <div className={classes} onClick={onSquareClick}>
      {svgUrl && (
        <img src={svgUrl} className="full" alt={props.piece || "piece"} />
      )}
    </div>
  );
};
