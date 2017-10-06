import Player from '../player';
import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pawnPos = board.findPiece(this);
        var availableMoves = [];
        let locationsToCheckForPieces;
        if (this.player == Player.BLACK) {
            const square_below = new Square(pawnPos.row - 1, pawnPos.col)
            availableMoves.push(square_below)
            if (pawnPos.row == 6 && board.getPiece(square_below) == undefined) {
                const two_squares_below = new Square(pawnPos.row - 2, pawnPos.col)
                availableMoves.push(two_squares_below)
            }
            locationsToCheckForPieces = [new Square(pawnPos.row-1, pawnPos.col-1), new Square(pawnPos.row-1, pawnPos.col+1)]
            locationsToCheckForPieces = locationsToCheckForPieces
                .filter(location => location.isValidSquare())
                .filter(location => {
                    let piece = board.getPiece(location);
                    return (piece !== undefined && piece.player == Player.WHITE)
            })
        } else {
            const square_above = new Square(pawnPos.row + 1, pawnPos.col)
            availableMoves.push(square_above)
            if (pawnPos.row == 1 && board.getPiece(square_above) == undefined) {
                const two_squares_above = new Square(pawnPos.row + 2, pawnPos.col)
                availableMoves.push(two_squares_above)
            }
            locationsToCheckForPieces = [new Square(pawnPos.row+1, pawnPos.col-1), new Square(pawnPos.row+1, pawnPos.col+1)]
            locationsToCheckForPieces = locationsToCheckForPieces
                .filter(location => location.isValidSquare())
                .filter(location => {
                    let piece = board.getPiece(location);
                    return (piece !== undefined && piece.player == Player.BLACK)
            })
        }
        availableMoves = availableMoves.filter(square => square.isValidSquare())
        availableMoves = availableMoves.filter(square => board.getPiece(square) === undefined);
        locationsToCheckForPieces = locationsToCheckForPieces.filter(square => board.getPiece(square) !== undefined && !(board.getPiece(square) instanceof King));
        availableMoves = availableMoves.concat(locationsToCheckForPieces);
        return availableMoves;
    }
}