import Piece from './piece';
import Square from '../square';


export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var availableMoves = [];
        let currentPositionOfBishop = board.findPiece(this);
        let { row, col } = currentPositionOfBishop

        let TRfound = false;
        let TLfound = false;
        let BLfound = false;
        let BRfound = false;
        while (!TRfound) {
            let next_pos = new Square(row + 1, col + 1)
            if (board.getPiece(next_pos) !== undefined) {
                TRfound = true
            } if (next_pos.row == 7 || next_pos.col == 7) {
                if (!TRfound) {
                    availableMoves.push(next_pos)
                }
                TRfound = true
            }
            if (!TRfound) {
                availableMoves.push(next_pos);
                ({ row, col } = next_pos);
            }
        }
        ({ row, col } = currentPositionOfBishop);
        while (!BLfound) {
            let next_pos = new Square(row - 1, col - 1)
            if (board.getPiece(next_pos) !== undefined) {
                BLfound = true
            } if (next_pos.row == 0 || next_pos.col == 0) {
                if (!BLfound) {
                    availableMoves.push(next_pos)
                }
                BLfound = true
            }
            if (!BLfound) {
                availableMoves.push(next_pos);
                ({ row, col } = next_pos);
            }
        }
        ({ row, col } = currentPositionOfBishop);
        while (!TLfound) {
            let next_pos = new Square(row + 1, col - 1)
            if (board.getPiece(next_pos) !== undefined) {
                TLfound = true
            } if (next_pos.row == 7 || next_pos.col == 0) {
                if (!TLfound) {
                    availableMoves.push(next_pos)
                }
                TLfound = true
            }
            if (!TLfound) {
                availableMoves.push(next_pos);
                ({ row, col } = next_pos);
            }
        }
        ({ row, col } = currentPositionOfBishop);
        while (!BRfound) {
            let next_pos = new Square(row - 1, col + 1)
            if (board.getPiece(next_pos) !== undefined) {
                BRfound = true
            } if (next_pos.row == 0 || next_pos.col == 7) {
                if (!BRfound) {
                    availableMoves.push(next_pos)
                }
                BRfound = true
            }
            if (!BRfound) {
                availableMoves.push(next_pos);
                ({ row, col } = next_pos);
            }
        }
        return availableMoves
    }
}
