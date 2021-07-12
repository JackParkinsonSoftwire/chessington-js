import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
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
}
