import Piece from './piece';
import Square from '../square';
import King from './king';


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
            if (board.getPiece(next_pos) !== undefined || next_pos.row == 7 || next_pos.col == 7) {
                TRfound = true
                availableMoves.push(next_pos)
            } 
            if (!TRfound) {
                availableMoves.push(next_pos);
                ({ row, col } = next_pos);
            }
        }
        ({ row, col } = currentPositionOfBishop);
        while (!BLfound) {
            let next_pos = new Square(row - 1, col - 1)
            if (board.getPiece(next_pos) !== undefined || next_pos.row == 0 || next_pos.col == 0) {
                BLfound = true
                availableMoves.push(next_pos);
            } 
            if (!BLfound) {
                availableMoves.push(next_pos);
                ({ row, col } = next_pos);
            }
        }
        ({ row, col } = currentPositionOfBishop);
        while (!TLfound) {
            let next_pos = new Square(row + 1, col - 1)
            if (board.getPiece(next_pos) !== undefined || next_pos.row == 7 || next_pos.col == 0) {
                TLfound = true
                availableMoves.push(next_pos)
            } 
            if (!TLfound) {
                availableMoves.push(next_pos);
                ({ row, col } = next_pos);
            }
        }
        ({ row, col } = currentPositionOfBishop);
        while (!BRfound) {
            let next_pos = new Square(row - 1, col + 1)
            if (board.getPiece(next_pos) !== undefined || next_pos.row == 0 || next_pos.col == 7) {
                BRfound = true
                availableMoves.push(next_pos)
            } 
            if (!BRfound) {
                availableMoves.push(next_pos);
                ({ row, col } = next_pos);
            }
        }

        availableMoves = availableMoves.filter(location => 
            (board.getPiece(location) === undefined || 
            (!(board.getPiece(location) instanceof King) && board.getPiece(location).player != this.player)
            ));

        return availableMoves
    }
}
