import type { PieceType } from "./board"

export type SquareType = {
    square: string, // e.g., 'a1', 'b2', etc.
    piece: PieceType,
    selected?: boolean,
    isCheck?: boolean
}