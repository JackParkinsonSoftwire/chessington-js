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
        return availableMoves.filter(square => square.isValidSquare());
    }
}
