import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var availableMoves = [];
        let currentKnightPosition = board.findPiece(this);
        const { row, col } = currentKnightPosition;
        availableMoves.push(new Square(row + 1, col + 2));
        availableMoves.push(new Square(row + 2, col + 1));
        availableMoves.push(new Square(row + 2, col - 1));
        availableMoves.push(new Square(row + 1, col - 2));
        availableMoves.push(new Square(row - 1, col + 2));
        availableMoves.push(new Square(row - 2, col + 1));
        availableMoves.push(new Square(row - 2, col - 1));
        availableMoves.push(new Square(row - 1, col - 2));
        return availableMoves.filter(square => square.isValidSquare());;
    }
}
