import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }
    
    getAvailableMovesRook(board) {
        let currentPositionOfRook = board.findPiece(this);
        var availableMoves = [];
        let isPastRow = false;
        let isPastCol = false;
        let maxRow = 0;
        let minRow = 7;
        let maxCol = 0;
        let minCol = 7;
        for (let i = 0; i < 8; i++) {
            var rowSquare = new Square(i, currentPositionOfRook.col);
            if (i !== currentPositionOfRook.row) {
                availableMoves.push(rowSquare)
                if (board.getPiece(rowSquare) !== undefined){
                    if (isPastRow ) {
                        minRow = Math.min(minRow, i);
                    } else {
                        maxRow = Math.max(maxRow, i);
                    }
                }
            } else {
                isPastRow = true;
            }
            var colSquare = new Square(currentPositionOfRook.row, i);
            if (i !== currentPositionOfRook.col) {
                availableMoves.push(colSquare)
                if (board.getPiece(colSquare) !== undefined){
                    if (isPastCol ) {
                        minCol = Math.min(minCol, i);
                    } else {
                        maxCol = Math.max(maxCol, i);
                    }
                }
            } else {
                isPastCol = true;
            }
        }

        availableMoves = availableMoves.filter(
            location => location.row <= minRow 
                && location.col <= minCol 
                && location.row >= maxRow 
                && location.col >= maxCol);
        
        

        availableMoves = availableMoves.filter(location => (board.getPiece(location) === undefined || !(board.getPiece(location) instanceof King)));

        availableMoves = availableMoves.filter(location => (board.getPiece(location) === undefined || board.getPiece(location).player != this.player))

        return availableMoves;
    }

    getAvailableMovesBishop(board) {
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

    getAvailableMoves(board) {
        return this.getAvailableMovesBishop(board).concat(this.getAvailableMovesRook(board));
    }
}
