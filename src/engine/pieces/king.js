import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentKingPosition = board.findPiece(this);
        var availableMoves = [];
        const { row, col } = currentKingPosition;
        availableMoves.push(new Square(row + 1, col));
        availableMoves.push(new Square(row + 1, col + 1));
        availableMoves.push(new Square(row + 1, col - 1));
        availableMoves.push(new Square(row, col + 1));
        availableMoves.push(new Square(row, col - 1));
        availableMoves.push(new Square(row - 1, col));
        availableMoves.push(new Square(row - 1, col + 1));
        availableMoves.push(new Square(row - 1, col - 1));
        availableMoves = availableMoves.filter(square => square.isValidSquare());
        availableMoves = availableMoves.filter(location => (board.getPiece(location) === undefined || !(board.getPiece(location) instanceof King)));
        availableMoves = availableMoves.filter(location => (board.getPiece(location) === undefined || board.getPiece(location).player != this.player))
        return availableMoves;
    }
}
