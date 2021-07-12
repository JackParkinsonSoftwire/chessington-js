import Piece from './piece';
import Square from '../square';


export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var available_moves = [];
        let currentPositionOfBishop = board.findPiece(this);
        let differenceBetweenXY = currentPositionOfBishop.row - currentPositionOfBishop.col;
        let sumOfXY = currentPositionOfBishop.row + currentPositionOfBishop.col;
        for (let row = 0;row<8;row++){
            let col1 = sumOfXY - row;
            let col2 = row - differenceBetweenXY;
            let position1 = new Square(row, col1);
            let position2 = new Square(row, col2);
            if (position1.isValidSquare() && !position1.equals(currentPositionOfBishop)){
                available_moves.push(position1);
            }
            if (position2.isValidSquare() && !position1.equals(currentPositionOfBishop)){
                available_moves.push(position2);
            }
        }
        return available_moves;
    }
}
